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

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AlbumViewerNetCore.Controllers
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    public class ConfigurationController : Controller
    {
        IOptions<ApplicationConfiguration> AppConfiguration;
        IHostingEnvironment Host;

        public ConfigurationController(IOptions<ApplicationConfiguration> configuration,
            IHostingEnvironment host)
        {
            AppConfiguration = configuration;
            Host = host;
        }


        [HttpGet]
        [Route("api/configuration")]
        public ApplicationConfiguration GetConfiguration()
        {
            return AppConfiguration.Value;
        }


	    [HttpGet("api/applicationstats")]
        public object GetApplicationStats()
        {
            // Seriously?
            //var desc = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

            var rt = typeof(IHostingEnvironment)
                .GetTypeInfo()
                .Assembly
                .GetCustomAttribute<AssemblyFileVersionAttribute>();
            var v = new Version(rt.Version);

            var stats = new
            {
                OsPlatform = System.Runtime.InteropServices.RuntimeInformation.OSDescription,
                AspDotnetVersion = AppContext.TargetFrameworkName
            };

            return stats;
        }


        /// <summary>
        /// Allow Lets Encrypt Reneawal requests through the pipeline by 
        /// default these are twarthed because they are treated as extensionless
        /// action route urls (which have no match and fail).
        /// 
        /// Explicitly map a route to the URL and then serve the physical file
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
