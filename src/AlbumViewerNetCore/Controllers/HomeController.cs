using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AlbumViewerAspNet5
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Redirect("index.html");
        }

        public IActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewBag.Message = "Your contact page...";

            return View("~/views/home/contact.cshtml");
        }

        public string ThrowError()
        {
            string name = null;
            return name.ToLower();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
        
    }
}
