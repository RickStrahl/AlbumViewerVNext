using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AlbumViewerAspNetCore;
using AlbumViewerBusiness.Configuration;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Reflection;
using System.Runtime.Versioning;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AlbumViewerNetCore.Controllers
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    public class ConfigurationController : Controller
    {
        IOptions<ApplicationConfiguration> AppConfiguration;
        IConfigurationRoot RawConfiguration;
        IWebHostEnvironment Host;

        public ConfigurationController(IOptions<ApplicationConfiguration> configuration,
            IConfigurationRoot config,
            IWebHostEnvironment host)
        {
            AppConfiguration = configuration;
            Host = host;
            RawConfiguration = config;
        }


        /// <summary>
        /// Returns the application configuration settings
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/configuration")]
        public ApplicationConfiguration GetConfiguration()
        {
            return AppConfiguration.Value;
        }



        /// <summary>
        /// Provides information about the running application
        /// </summary>
        /// <returns></returns>
	    [HttpGet("api/applicationstats")]
        public object GetApplicationStats()
        {
            
            //var rt = typeof(IHostingEnvironment)
            //    .GetTypeInfo()
            //    .Assembly
            //    .GetCustomAttribute<AssemblyFileVersionAttribute>();
            //var v = new Version(rt.Version);

            var vname = Assembly.GetEntryAssembly()?.GetCustomAttribute<TargetFrameworkAttribute>()?.FrameworkName;

            string useSqLite = RawConfiguration["Data:useSqLite"];

            // in 3.0 this might work - 2.2: SERIOUSLY????
            //string runtime = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

            var stats = new
            {
                OsPlatform = System.Runtime.InteropServices.RuntimeInformation.OSDescription,
                AspDotnetVersion = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription,
                DataMode = useSqLite == "true" ? "SqLite" : "Sql Server"
            };

            return stats;
        }


        /// <summary>
        /// Explicit endpoint to handle LetsEncryt certificate requests
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route(".well-known/acme-challenge/{id}")]
        public ActionResult LetsEncrypt(string id)
        {
            var file = Path.Combine(Host.WebRootPath, ".well-known", "acme-challenge", id);
            return PhysicalFile(file, "text/plain");
        }
    }
}
