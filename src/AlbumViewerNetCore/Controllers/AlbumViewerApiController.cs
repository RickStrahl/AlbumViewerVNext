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

namespace AlbumViewerAspNetCore
{
    [ApiExceptionFilter]
    [EnableCors("CorsPolicy")]
    public class AlbumViewerApiController : Controller
    {
        AlbumViewerContext context;
        IServiceProvider serviceProvider;

        ArtistRepository ArtistRepo;
        AlbumRepository AlbumRepo;

        public AlbumViewerApiController(AlbumViewerContext ctx, IServiceProvider svcProvider,
            ArtistRepository artistRepo, AlbumRepository albumRepo)
        {
            context = ctx;
            serviceProvider = svcProvider;

            AlbumRepo = albumRepo;
            ArtistRepo = artistRepo;
        }

        [HttpGet]
        [Route("api/helloworld")]
        public object HelloWorld(string name = null)
        {            
            if (string.IsNullOrEmpty(name))
                name = "Johnny Doe";

            return new
            {
                message = $"Hello world {name}",
                time = DateTime.UtcNow                
            };
        }

        #region albums

        [HttpGet]
        [Route("api/albums")]
        public async Task<IEnumerable<Album>> GetAlbums(int page = -1, int pageSize = 15)
        {
            //var repo = new AlbumRepository(context);
            return await AlbumRepo.GetAllAlbums(page, pageSize);
        }

        [HttpGet("api/album/{id:int}")]
        public async Task<Album> GetAlbum(int id)
        {
            return await AlbumRepo.Load(id);
        }

        [HttpPost("api/album")]
        public async Task<Album> SaveAlbum([FromBody] Album postedAlbum)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            if (!ModelState.IsValid)
                throw new ApiException("Model binding failed.", 500);

            if (!AlbumRepo.Validate(postedAlbum))
                throw new ApiException(AlbumRepo.ErrorMessage, 500, AlbumRepo.ValidationErrors);

            postedAlbum.Artist.AmazonUrl = DateTime.Now.ToString();

            // this doesn't work for updating the child entities properly
            //if(!await AlbumRepo.SaveAsync(postedAlbum))
            //    throw new ApiException(AlbumRepo.ErrorMessage, 500);

            var album = await AlbumRepo.SaveAlbum(postedAlbum);
            if (album == null)
                throw new ApiException(AlbumRepo.ErrorMessage, 500);

            return album;
        }

        [HttpDelete("api/album/{id:int}")]
        public async Task<bool> DeleteAlbum(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            return await AlbumRepo.DeleteAlbum(id);
        }


        [HttpGet]
        public async Task<string> DeleteAlbumByName(string name)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            var pks =
                await context.Albums.Where(alb => alb.Title == name).Select(alb => alb.Id).ToAsyncEnumerable().ToList();

            StringBuilder sb = new StringBuilder();
            foreach (int pk in pks)
            {
                bool result = await AlbumRepo.DeleteAlbum(pk);
                if (!result)
                    sb.AppendLine(AlbumRepo.ErrorMessage);
            }

            return sb.ToString();
        }

        #endregion

        #region artists

        [HttpGet]
        [Route("api/artists")]
        public async Task<IEnumerable> GetArtists()
        {
            return await ArtistRepo.GetAllArtists();
        }

        [HttpGet("api/artist/{id:int}")]
        public async Task<object> Artist(int id)
        {
            var artist = await ArtistRepo.Load(id);

            if (artist == null)
                throw new ApiException("Invalid artist id.", 404);

            var albums = await ArtistRepo.GetAlbumsForArtist(id);

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = albums
            };
        }

        [HttpPost("api/artist")]
        public async Task<ArtistResponse> SaveArtist([FromBody] Artist artist)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            if (!ArtistRepo.Validate(artist))
                throw new ApiException(ArtistRepo.ValidationErrors.ToString(), 500, ArtistRepo.ValidationErrors);

            if (!await ArtistRepo.SaveAsync(artist))
                throw new ApiException("Unable to save artist.");

            return new ArtistResponse()
            {
                Artist = artist,
                Albums = await ArtistRepo.GetAlbumsForArtist(artist.Id)
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


        [HttpDelete("api/artist/{id:int}")]
        public async Task<bool> DeleteArtist(int id)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
                throw new ApiException("You have to be logged in to modify data", 401);

            return await ArtistRepo.DeleteArtist(id);
        }

        #endregion
    }

    #region Custom Responses

    public class ArtistResponse
    {
        public Artist Artist { get; set; }

        public List<Album> Albums { get; set; }
    }

    #endregion
}

