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
using Westwind.Utilities;
//using Westwind.Utilities;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicStoreVNext
{
    public class MusicStoreApiController : Controller
    {
        MusicStoreContext context;        

        public MusicStoreApiController(MusicStoreContext ctx)
        {
            context = ctx;            
        }


        [HttpGet]
        public async Task<IEnumerable<Album>> Albums()
        {
            // For demonstration create individual instance
            var ctxt = new MusicStoreContext();            

            var result = await ctxt.Albums                                                
                .Include(ctx => ctx.Artist)
                .Include(ctx => ctx.Tracks)
                .OrderBy(alb => alb.Title)
                .ToListAsync();

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

#if false
            int id = postedAlbum.Id;

            Album album = null;
            if (id < 1)
            {
                album = new Album();
                context.Albums.Add(album);
            }
            else
            {
                album = await context.Albums
                    .Include(ctx => ctx.Tracks)
                    .Include(ctx => ctx.Artist)
                    .FirstOrDefaultAsync(alb => alb.Id == id);
            }

            // check for existing artist and assign if matched
            if (album.Artist.Id < 1)
            {
                var artist = await context.Artists
                                          .FirstOrDefaultAsync(art => art.ArtistName == postedAlbum.Artist.ArtistName);
                if (artist != null)
                    album.Artist.Id = artist.Id;
            }

            DataUtils.CopyObjectData(postedAlbum, album, "Id,Tracks,Artist");
            DataUtils.CopyObjectData(postedAlbum.Artist, album.Artist, "Id");

            foreach (var postedTrack in postedAlbum.Tracks)
            {
                var track = album.Tracks.FirstOrDefault(trk => trk.Id == postedTrack.Id);
                if (postedTrack.Id > 0 && track != null)
                    DataUtils.CopyObjectData(postedTrack, track);
                else
                {
                    track = new Track();
                    context.Tracks.Add(track);
                    DataUtils.CopyObjectData(postedTrack, track, "Id,AlbumId,ArtistId");
                    album.Tracks.Add(track);
                }
            }

            context.SaveChanges();

            return album;
#endif
        }


        [HttpGet]
        public async Task<IEnumerable> Artists()
        {            
            var result = await context.Artists                            
                            .OrderBy(art => art.ArtistName)
                            .Select(art=> new
                            {
                                ArtistName = art.ArtistName,
                                Id = art.Id,
                                AlbumCount = context.Albums.Count(alb=> alb.ArtistId == art.Id)
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

