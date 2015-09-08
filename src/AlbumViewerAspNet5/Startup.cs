using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlbumViewerBusiness;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Routing;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Logging.Console;
using Microsoft.Data.Entity;
using Microsoft.Framework.Configuration;
using System.Runtime;
using Microsoft.Dnx.Runtime;

namespace AlbumViewerAspNet5
{
    public class Startup
    {
        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            // Setup configuration sources.
            var builder = new ConfigurationBuilder(appEnv.ApplicationBasePath)
                .AddJsonFile("config.json")
                .AddJsonFile($"config.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public static IConfiguration Configuration { get; set; }

        // This method gets called by the runtime.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));

            // Add MVC services to the services container.
            services.AddMvc();

            // Add EF services to the services container
            services.AddEntityFramework()
                        .AddSqlServer()
                        .AddDbContext<AlbumViewerContext>(options =>
                        {
                            var val = Configuration["Data:MusicStore:ConnectionString"];
                            options.UseSqlServer(val);
                        });

            // Inject DbContext as per Request context
            services.AddScoped<AlbumViewerContext>();
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
        {
            // Configure the HTTP request pipeline.

            // Add the console logger.
            loggerfactory.AddConsole();

            // Add the following to the request pipeline only in development environment.
            if (env.IsEnvironment("Development"))
            {
                app.UseBrowserLink();
                app.UseErrorPage( new ErrorPageOptions() );
            }
            else
            {
                // Add Error handling middleware which catches all application specific errors and
                // send the request to the following path or controller action.
                app.UseErrorHandler("/Home/Error");
            }

            // Add static files to the request pipeline.
            app.UseStaticFiles();

            // Add MVC to the request pipeline.
            app.UseMvc(routes =>
            {

                routes.MapRoute(
                    name: "api",
                    template: "api/{action}/{id?}",
                    defaults: new {controller = "AlbumViewerApi", action = "Index"});
                routes.MapRoute(
                    name: "version",
                    template: "version/{action}",
                    defaults: new {controller = "VersionApi", action = "Index"});
                routes.MapRoute(
                    name: "mvc",
                    template: "mvc/{action}/{id?}",
                    defaults: new {controller = "AlbumViewerMvc", action = "Index"});


                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                // Uncomment the following line to add a route for porting Web API 2 controllers.
                // routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
            });
        }
    }
}
