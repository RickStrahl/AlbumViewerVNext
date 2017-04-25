using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AlbumViewerNetCore.Controllers
{
    public class HelloWorldController : Controller
    {

        [HttpGet]
        [Route("index2.html")]
        public string Index()
        {
            return "<h1>Hello</h1><hr/>Index page test";
        }

        [HttpGet]
        [Route("api/helloworld")]
        public object HelloWorld(string name = null)
        {
            //return "Hello " + name + ". Time is: " + DateTime.Now;
            if (string.IsNullOrEmpty(name))
                name = "Johnny Doe";

            return new { helloMessage = "Hello " + name + ". Time is: " + DateTime.Now };
        }
    }
}
