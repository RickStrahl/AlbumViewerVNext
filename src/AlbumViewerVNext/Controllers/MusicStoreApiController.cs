using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.ModelBinding;
using Microsoft.Framework.Runtime;
using MusicStoreBusiness;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Reflection;
using System.Threading.Tasks;
using Westwind.Utilities;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicStoreVNext
{
    public class MusicStoreApiController : Controller
    {
        MusicStoreContext context;
        IApplicationEnvironment environment;

        public MusicStoreApiController(MusicStoreContext ctx, IApplicationEnvironment environment)
        {
            context = ctx;
            this.environment = environment;
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

            DataUtils.CopyObjectData(postedAlbum, album, "Artist,Tracks");
            DataUtils.CopyObjectData(postedAlbum.Artist, album.Artist);


            // ModelBinding doesn't work right at the moment
            //if (!await TryUpdateModelAsync(album,null))
            //   throw new ApiException("Model binding failed.",500);

            int result = await context.SaveChangesAsync();

            return album;
        }


        [HttpGet]
        public IEnumerable<Artist> Artists()
        {
            IEnumerable<Artist> result = null;
            result = context.Artists.OrderBy(art => art.ArtistName).ToList();
            return result;
        }

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

