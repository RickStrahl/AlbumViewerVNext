using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.Runtime;
using MusicStoreBusiness;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Reflection;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicStoreVNext
{
    public class ApiController : Controller
    {
        MusicStoreContext context;
        IApplicationEnvironment environment;

        public ApiController(MusicStoreContext ctx, IApplicationEnvironment environment)
        {
            context = ctx;
            this.environment = environment;                
        }

     

        [HttpGet]
        public async Task<IEnumerable<Album>> Albums()
        {
            var  result = await context.Albums
                //.Include(ctx=> ctx.Artist)
                //.Include(ctx=> ctx.Tracks)
                .OrderBy(alb=> alb.Title)
                .Take(10)
                .ToListAsync();

            // HACK: Load relationships explicitly
            //       since .Include() nor lazy loading works
            await context.Tracks.LoadAsync();
            await context.Artists.LoadAsync();


            //// EF7 Bug - manually lazy load children
            //foreach (var album in result)
            //{
            //    await album.LoadChildrenAsync(context);
            //}

            return result;
        }

        [HttpGet]
        public async Task<Album> Album(int id)
        {
            var album = await context.Albums.FirstOrDefaultAsync(alb => alb.Id == id);
            await album.LoadChildrenAsync(context);
            return album;
        }

        [HttpPost]
        public string Album(Album album)
        {
            return album.Title;
        }

        [HttpGet]
        public IEnumerable<Artist> Artists()
        {
            IEnumerable<Artist> result = null;
            result = context.Artists.OrderBy(art => art.ArtistName).ToList();
            return result;
        }

        public class ApiError
        {
            public bool isError { get; set; }
            public string message { get; set; }
            public string detail { get; set; }
        }
    }
}
