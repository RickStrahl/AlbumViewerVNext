using Microsoft.AspNet.Mvc;
using MusicStoreBusiness;
using System;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicStoreVNext
{
    public class ApiController : Controller
    {
        MusicStoreContext context;

        public ApiController(MusicStoreContext ctx)
        {
            context = ctx;
        }   

        public string HelloWorld(string name)
        {                        
            return "Hello World, " + name  + ". Time is: "  + DateTime.Now.ToString();
        }

        public IEnumerable<Album> Albums()
        {
            IEnumerable<Album> result = null;
            result = context.Albums.OrderBy(alb=> alb.Title).ToList();

            //// EF7 Bug - not loading relationships - do it manually for now.
            //foreach (var album in result)
            //{
            //    album.LoadChildren(context);
            //}

            return result;
        }

        public Album Album(int id)
        {
            var album = context.Albums.FirstOrDefault(alb => alb.Id == id);
            album.LoadChildren(context);
            return album;
        }

        public IEnumerable<Artist> Artists()
        {
            IEnumerable<Artist> result = null;
            result = context.Artists.OrderBy(art => art.ArtistName).ToList();
            return result;
        }

        public class ApiError()
        {
            public bool isError { get; set; }
            public string message { get; set; }
            public string detail { get; set; }
        }
    }
}
