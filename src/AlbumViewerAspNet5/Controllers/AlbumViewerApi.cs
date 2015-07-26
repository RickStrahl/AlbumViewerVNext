using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.ModelBinding;
using Microsoft.Framework.Runtime;
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

//using Westwind.Utilities;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicStoreVNext
{
    public class AlbumViewerApiController : Controller
    {
        AlbumViewerContext context;
       
        public AlbumViewerApiController(AlbumViewerContext ctx)
        {
            context = ctx;
        }


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
        public async Task<IEnumerable<Album>> Albums()
        {
            List<Album> result;

            // For demonstration create Context Instance manually 
            using (var ctxt = context) // new AlbumViewerContext())
            {
                result = await ctxt.Albums.Include(ctx => ctx.Tracks)
                    .Include(ctx => ctx.Artist)
                    .OrderBy(alb => alb.Title)
                    .ToListAsync();
            }

            return result;
        }

        [HttpGet]
        public async Task<Album> Album(int id)
        {
            var album = await context.Albums
                                     .Include(ctx => ctx.Artist)
                                     .Include(ctx=> ctx.Tracks)                                     
                                     .FirstOrDefaultAsync(alb => alb.Id == id);
            //await album.LoadTracksAsync(context);
            return album;
        }

        [HttpPost]
        public async Task<Album> Album([FromBody] Album postedAlbum)
        {
            if (!ModelState.IsValid)            
                throw new ApiException("Model binding failed.",500);

            var albumRepo = new AlbumRepository(context);
            return await albumRepo.SaveAlbum(postedAlbum);

        }


        [HttpGet]
        [Route("api/artists")]
        public async Task<IEnumerable> Artists()
        {
            var result = await context.Artists
                .OrderBy(art => art.ArtistName)
                .Select(art => new
                {
                    ArtistName = art.ArtistName,
                    Description = art.Description,
                    ImageUrl = art.ImageUrl,
                    Id = art.Id,
                    AlbumCount = context.Albums.Count(alb => alb.ArtistId == art.Id)
                })
                .ToListAsync();
            return result;

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
            var db = new AlbumRepository(context);
            return await db.DeleteAlbum(id);
        }


        [HttpDelete]
        public async Task<bool> DeleteArtist(int id)
        {
            var db = new AlbumRepository(context);
            return await db.DeleteArtist(id);
        }

        [HttpGet]
        public async Task<string> DeleteAlbumByName(string name)
        {
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


    public class ApiError
    {
        public bool isError { get; set; }
        public string message { get; set; }
        public string detail { get; set; }
        public Dictionary<string, string> errors { get; set; }

        public ApiError(ModelStateDictionary modelState)
        {
            if (modelState.Any(m => m.Value.Errors.Count > 0))
            {
                message = "Please correct the specified errors and try again.";
                //errors = modelState.SelectMany(m => m.Value.Errors).ToDictionary(m => m.Key, m=> m.ErrorMessage);
                //errors = modelState.SelectMany(m => m.Value.Errors.Select( me => new KeyValuePair<string,string>( m.Key,me.ErrorMessage) ));
                //errors = modelState.SelectMany(m => m.Value.Errors.Select(me => new ModelError { FieldName = m.Key, ErrorMessage = me.ErrorMessage }));
            }
        }
    }

    public class ApiException : Exception
    {
        public int StatusCode { get; set; }
        public ApiException(string message, int statusCode = 500) :
            base(message)
        {
            StatusCode = StatusCode;
        }
        public ApiException(Exception ex, int statusCode = 500) : base(ex.Message)
        {
            StatusCode = statusCode;
        }
    }

}

