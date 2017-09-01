using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
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
	        // use this to allow command line and environment variable parameters in the config
            // Example command line: --hosturl "http://0.0.0.0:10000"
	        var configuration = new ConfigurationBuilder()
	            .AddCommandLine(args)
                .AddEnvironmentVariables()
	            .Build();

	        var hostUrl = configuration["hosturl"];
	        if (string.IsNullOrEmpty(hostUrl))
	            hostUrl = "http://0.0.0.0:5000";

	        var host = WebHost.CreateDefaultBuilder(args)
	            .UseUrls(hostUrl)
	            .UseStartup<Startup>()
	            .Build();


	        return host;
	  	        
	    }



        
	}
}
