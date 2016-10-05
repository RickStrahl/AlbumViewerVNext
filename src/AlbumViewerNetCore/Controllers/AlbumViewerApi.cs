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
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

//using Westwind.Utilities;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AlbumViewerAspNet5
{
    [ApiExceptionFilter]
    [EnableCors("CorsPolicy")]
    public class AlbumViewerApiController : Controller
    {
        AlbumViewerContext context;
        IServiceProvider serviceProvider;
       
        public AlbumViewerApiController(AlbumViewerContext ctx, IServiceProvider svcProvider)
        {
            context = ctx;
            serviceProvider = svcProvider;
        }
        [HttpGet]
        [Route("api/helloworld")]
        public object HelloWorld(string name = null)
        {
            //return "Hello " + name + ". Time is: " + DateTime.Now;
            if (string.IsNullOrEmpty(name))
                name = "Johnny Doe";

            return new { helloMessage = "Hello!  " + name + ". Time is: " + DateTime.Now };
        }

        [HttpGet]
        [Route("api/albums")]
        public async Task<IEnumerable<Album>> Albums(int page = -1, int pageSize = 15)
        {
            var repo = new AlbumRepository(context);
            return await repo.GetAllAlbums(page, pageSize);
        }

        [HttpGet("api/album/{id:int}")]
        public async Task<Album> Album(int id)
        {
            var repo = new AlbumRepository(context);
            return await repo.Load(id);
        }

        [HttpPost("api/album")]
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
            var repo = new ArtistRepository(context);
            return  await repo.GetAllArtists();
        }

        [HttpGet("api/artist/{id:int}")]
        public async Task<object> Artist(int id)
        {
            var repo = new ArtistRepository(context);

            var artist = await repo.Load(id);

            if (artist == null)
                throw new ApiException("Invalid artist id.", 404);

            var albums = await repo.GetAlbumsForArtist(id);

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = albums
            };
        }

        [HttpPost("api/artist")]
        public async Task<ArtistResponse> Artist([FromBody] Artist postedArtist)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data",401);

            var artistRepo = new ArtistRepository(context);            

            var artist = await artistRepo.SaveArtist(postedArtist);

            if (artist == null)
                throw new ApiException("Unable to save artist.");

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = await artistRepo.GetAlbumsForArtist(artist.Id)
            };
        }

        [HttpGet("api/artistlookup")]
        public async Task<IEnumerable<object>> ArtistLookup(string search = null)
        {
            if (string.IsNullOrEmpty(search))
                return new List<object>();
            
            var repo = new ArtistRepository(context);
            var term = search.ToLower();
            return await repo.ArtistLookup(term);            
        }


        [HttpGet("api/deletealbum/{id:int}")]
        public async Task<bool> DeleteAlbum(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);


            var db = new AlbumRepository(context);
            return await db.DeleteAlbum(id);
        }



        [HttpDelete("api/artist/id")]
        public async Task<bool> DeleteArtist(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);


            var repo = new ArtistRepository(context);
            return await repo.DeleteArtist(id);
        }


        [HttpGet]
        public async Task<string> DeleteAlbumByName(string name)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            var repo = new AlbumRepository(context);

            var pks = await context.Albums.Where(alb => alb.Title == name).Select(alb => alb.Id).ToAsyncEnumerable().ToList();

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

    #region Custom Responses
    public class ArtistResponse
    {
        public Artist Artist { get; set; }

        public List<Album> Albums { get; set; }
    }


    #endregion
}

