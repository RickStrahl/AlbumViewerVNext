using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Hosting;
using System.Reflection;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicStoreVNext.Controllers.Controllers
{
   
    public class VersionApiController : Controller
    {
        // GET: api/values
        [HttpGet]
        public string KlrVersion()
        {
            return "Klr Version: " + GetKlrVersion();
        }

        static string GetKlrVersion()
        {
            var assembly = typeof(Program).GetTypeInfo().Assembly;
            var attr = assembly.
                GetCustomAttribute<AssemblyInformationalVersionAttribute>();
            return attr.InformationalVersion;
        }
    }
}
