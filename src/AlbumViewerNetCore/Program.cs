using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.Extensions.Configuration;

namespace AlbumViewerNetCore
{
	public class Program
	{
	    public static void Main(string[] args)
	    {
            BuildWebHost(args).Run();

// The simplest thing possible!
#if false
            WebHost.Start(async (context) =>
	            {
	                await context.Response.WriteAsync("Hello World. Time is: " + DateTime.Now);
	            })
	            .WaitForShutdown();
#endif
	    }

	    public static IWebHost BuildWebHost(string[] args)
	    {
 var host = WebHost.CreateDefaultBuilder(args)
	                    
	            .UseStartup<Startup>()
                //.UseHttpSys(options =>
                //{
                //    options.Authentication.Schemes = AuthenticationSchemes.None;
                //    options.Authentication.AllowAnonymous = true;
                //    options.MaxConnections = 100;
                //    options.MaxRequestBodySize = 30000000;
                //    options.UrlPrefixes.Add("http://localhost:5002");
                //})
                .Build();


	        return host;
	  	        
	    }



        
	}
}
