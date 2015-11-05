using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.ModelBinding;
using System.Runtime;
using AlbumViewerBusiness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Collections;
using System.Text;
using Westwind.Utilities;
using Microsoft.Data.Entity;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Internal;
using Microsoft.AspNet.Mvc.Filters;

//using Westwind.Utilities;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AlbumViewerAspNet5
{
    [ApiExceptionFilter]
    public class AlbumViewerApiController : Controller
    {
        AlbumViewerContext context;
        IServiceProvider serviceProvider;
       
        public AlbumViewerApiController(AlbumViewerContext ctx, IServiceProvider svcProvider)
        {
            context = ctx;
            serviceProvider = svcProvider;
        }

        //public override void OnActionExecuting(ActionExecutingContext context)
        //{
        //    Response.Headers.Add("Access-Control-Allow-Origin", new string[] { "*" });
        //    base.OnActionExecuting(context);
        //}

        [HttpGet]
        [Route("api/HelloWorld")]
        public object HelloWorld(string name = null)
        {
            if (string.IsNullOrEmpty(name))
                name = "Johnny Doe";
            return new { helloMessage = "Hello " + name + ". Time is: " + DateTime.Now };
        }

        [HttpGet]
        [Route("api/albums")]
        public async Task<IEnumerable<Album>> Albums(int page = -1, int pageSize = 15)
        {
            IQueryable<Album> enumResult = context.Albums
                .Include(ctx => ctx.Tracks)
                .Include(ctx => ctx.Artist)
                .OrderBy(alb => alb.Title);

            if (page > 0)
            {
                enumResult = enumResult
                                .Skip( (page - 1)  * pageSize)
                                .Take(pageSize);
            }   

            return await enumResult.ToListAsync();            
        }

        [HttpGet]
        public async Task<Album> Album(int id)
        {
            // var contextAlbums = new AlbumViewerContext(serviceProvider);
            var album = await context.Albums
                                .Include(ctx => ctx.Artist)
                                .Include(ctx => ctx.Tracks)
                                .FirstOrDefaultAsync(alb => alb.Id == id);
            return album;
        }

        [HttpPost]
        public async Task<Album> Album([FromBody] Album postedAlbum)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            if (!ModelState.IsValid)            
                throw new ApiException("Model binding failed.",500);

            var albumRepo = new AlbumRepository(context);
            return await albumRepo.SaveAlbum(postedAlbum);
        }


        [HttpGet]
        [Route("api/artists")]
        public async Task<IEnumerable> Artists()
        {
            // For demonstration use a manually instantiated instance of
            // the dbContext.
            //
            // Note the need to pass in serviceProvider or *something*
            // that gives access to the Configuration so the connection
            // string from config can be found.
            // 
            // This overload is what EF uses internally to create a
            // to create a configured instance of a context.
            //
            // Scoped instances of Context can be problematic in some
            // controllers - you're incurring overhead for each hit even
            // if context is isn't used in an action. If you need multiple instances
            // of contexts you may also need to manually instantiate. 
            //using (var ctxt = new AlbumViewerContext(serviceProvider))
            //{
                var artists = await context.Artists
                    .OrderBy(art => art.ArtistName)
                    .Select(art => new ArtistWithAlbum()
                    {
                        ArtistName =  art.ArtistName,
                        Description = art.Description,
                        ImageUrl = art.ImageUrl,
                        Id = art.Id,
                        AmazonUrl = art.AmazonUrl,

                        // THIS CODE BOMBS
                        //AlbumCount = context.Albums.Count(alb => alb.ArtistId == art.Id)
                    })
                    .ToListAsync();

                            // workaround for the AlbumCount var issue - REMOVE ASAP
                foreach (var artist in artists)
                {
                    artist.AlbumCount = context.Albums.Count(alb => alb.ArtistId == artist.Id);
                }

            return artists;
            //}
        }

        [HttpGet]
        public async Task<object> Artist(int id)
        {
            var artist = await context.Artists
                .FirstOrDefaultAsync(art => art.Id == id);

            if (artist == null)
                throw new ApiException("Invalid artist id.", 404);

            var albums = await context.Albums
                            .Where(alb => alb.ArtistId == id)
                            .ToListAsync();

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = albums
            };
        }

        [HttpPost]
        public async Task<ArtistResponse> Artist([FromBody] Artist postedArtist)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data",401);

            var db = new AlbumRepository(context);
            var artist = await db.SaveArtist(postedArtist);

            if (artist == null)
                throw new ApiException("Unable to save artist.");

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = await db.Context.Albums
                    .Include(a=> a.Tracks)
                    .Include(a=> a.Artist)            
                    .Where(a => a.ArtistId == artist.Id).ToListAsync()
            };
        }

        [HttpGet]
        public async Task<IEnumerable<object>> ArtistLookup(string search = null)
        {
            if (string.IsNullOrEmpty(search))
                return new List<object>();
            
            var db = new AlbumRepository(context);

            var term = search.ToLower();
            var artists = await db.Context.Artists
                                  .Where(a => a.ArtistName.ToLower().StartsWith(term))
                                  .Select(a=> new
                                  {
                                      name = a.ArtistName,
                                      id=a.ArtistName                                      
                                  })
                                  .ToListAsync();

            return artists;
        }

        [HttpGet]
        public async Task<bool> DeleteAlbum(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);


            var db = new AlbumRepository(context);
            return await db.DeleteAlbum(id);
        }


        [HttpDelete]
        public async Task<bool> DeleteArtist(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);


            var db = new AlbumRepository(context);
            return await db.DeleteArtist(id);
        }

        [HttpGet]
        public async Task<string> DeleteAlbumByName(string name)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            var repo = new AlbumRepository(context);

            var pks = await context.Albums.Where(alb => alb.Title == name).Select(alb => alb.Id).ToListAsync();

            StringBuilder sb = new StringBuilder();
            foreach (int pk in pks)
            {
                bool result = await repo.DeleteAlbum(pk);
                if (!result)
                    sb.AppendLine(repo.ErrorMessage);
            }

            return sb.ToString();
        }
    }

    public class ArtistResponse
    {
        public Artist Artist { get; set; }

        public List<Album> Albums { get; set; }
    }

    public class ArtistWithAlbum : Artist
    {
        public int AlbumCount { get; set; }
    }

}

