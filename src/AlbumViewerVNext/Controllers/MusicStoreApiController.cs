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
            var result = await context.Albums
                .Include(ctx => ctx.Tracks)
                .Include(ctx => ctx.Artist)
                .OrderBy(alb => alb.Title)
                .ToListAsync();

            return result;
        }

        [HttpGet]
        public async Task<Album> Album(int id)
        {
            var album = await context.Albums
                                     .Include(ctx=> ctx.Tracks)
                                     .Include(ctx => ctx.Artist)
                                     .FirstOrDefaultAsync(alb => alb.Id == id);
            //await album.LoadTracksAsync(context);
            return album;
        }

        [HttpPost]
        public async Task<Album> Album([FromBody] Album postedAlbum)
        {
            if (!ModelState.IsValid)            
                throw new ApiException("Model binding failed.",500);
            
            int id = postedAlbum.Id;

            Album album = null;
            if (id < 1)
                album = context.Albums.Add(new Album());
            else
            {
                album = await context.Albums
                    .Include(ctx => ctx.Tracks)
                    .Include(ctx => ctx.Artist)
                    .FirstOrDefaultAsync(alb => alb.Id == id);
            }


            // ModelBinding doesn't work right at the moment
            //if (!await TryUpdateModelAsync(album,null))
            //   throw new ApiException("Model binding failed.",500);

            // SimpleMapper from ASP.NET MVC sample - doesn't support one to many
            //SimpleMapper.Map(postedAlbum, album);

            // 
            //var album2 = AutoMapper.Mapper.Map<Album,Album>(postedAlbum, album) as Album;

            Westwind.Utilities.DataUtils.CopyObjectData(postedAlbum, album, "Tracks,Artist");

            Westwind.Utilities.DataUtils.CopyObjectData(postedAlbum.Artist, album.Artist);
            if (album.Artist.Id < 1)
                context.Artists.Add(album.Artist);

            foreach (var postedTrack in postedAlbum.Tracks)
            {
                var track = album.Tracks.FirstOrDefault(trk => trk.Id == postedTrack.Id);
                if  (postedTrack.Id > 0 && track != null)
                    Westwind.Utilities.DataUtils.CopyObjectData(postedTrack, track);
                else
                {
                    track = new Track();
                    context.Tracks.Add(track);
                    Westwind.Utilities.DataUtils.CopyObjectData(postedTrack, track,"Id,AlbumId,ArtistId");                    
                    album.Tracks.Add(track);                                    
                }
            }

            // find tracks to delete - first looks for those posted (except 0 ids)
            var postedIds = postedAlbum.Tracks
                .Where(t=> t.Id > 0)
                .Select(t => t.Id)
                .ToList();

            // then delete all those that don't exist in the actual albums
            var deletedTracks = album.Tracks                
                .Where(trk=> trk.Id > 0 && !postedIds.Contains(trk.Id))
                .ToList();


            if (deletedTracks.Count > 0)
            {
                foreach (var dtrack in deletedTracks)
                {                                        
                    context.Tracks.Remove(dtrack);
                    //album.Tracks.Remove(dtrack);
                }
            }

            int result = await context.SaveChangesAsync();

            
            //// have to refresh the list from disk since we can't remove 
            //// from context and remove from tracks collection
            //return await context.Albums
            //        .Include(a => a.Tracks)
            //        .Include(a => a.Artist)
            //        .Where(a => a.Id == album.Id)
            //        .FirstOrDefaultAsync();

            return album;
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

