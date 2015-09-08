using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using System.Runtime;
using AlbumViewerBusiness;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Reflection;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicStoreVNext
{
    public class AlbumViewerMvcController : Controller
    {
        AlbumViewerContext context;
        private readonly IServiceProvider serviceProvider;

        public AlbumViewerMvcController(AlbumViewerContext ctx, IServiceProvider svcProvider)
        {
            context = ctx;
            serviceProvider = svcProvider;
            //this.environment = environment;
        }

        public async Task<ActionResult> Index()
        {
            return await Albums();
        }

        public async Task<ActionResult> Albums()
        {
            
            var result = await context.Albums
                .Include(ctx => ctx.Tracks)
                .Include(ctx => ctx.Artist)
                .OrderBy(alb => alb.Title)
                .ToListAsync();

            return View("Albums", result);
        }

        [HttpGet]
        public async Task<ActionResult> Album(int id)
        {
            var album = await context.Albums
                .Include(a => a.Tracks)
                .Include(a => a.Artist)
                .FirstOrDefaultAsync(alb => alb.Id == id);

            return View(album);
        }

        [HttpGet,HttpPost]
        public async Task<ActionResult> TagHelpers(Album album = null)
        {
            if (album == null || (string.IsNullOrEmpty(album.Description) && string.IsNullOrEmpty(album.Title)))
            {
                album = new Album()
                {
                    Id = 1,
                    Title = "Highway to Hell",
                    Description = "AC/DC's best"
                };
            }
            else
            {

                if (ModelState.IsValid)
                {
                    ModelState.Remove("Title");
                    album.Title = album.Title + " updated.";
                }
            }

            return View(album);
        }



    }
}
