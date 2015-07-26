using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.Runtime;
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

        public AlbumViewerMvcController(AlbumViewerContext ctx)
        {
            context = ctx;
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

    }
}
