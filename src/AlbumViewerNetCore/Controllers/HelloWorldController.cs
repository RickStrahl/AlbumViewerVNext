using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlbumViewerBusiness.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AlbumViewerNetCore.Controllers
{
    public class HelloWorldController : Controller
    {
        IOptions<ApplicationConfiguration> AppConfiguration;

        public HelloWorldController(IOptions<ApplicationConfiguration> configuration)
        {
            AppConfiguration = configuration;    
        }

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
            if (string.IsNullOrEmpty(name))
                name = "Johnny Doe";

	        return new
	        {
		        helloMessage = "Hello " + name,
		        Time = DateTime.Now
	        };
        }

  

	}
}
