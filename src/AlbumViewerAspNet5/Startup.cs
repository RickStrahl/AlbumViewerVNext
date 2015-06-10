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
using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Logging.Console;
using Microsoft.Data.Entity;


namespace AlbumViewerAspNet5
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Setup configuration sources.
            Configuration = new Configuration()
                .AddJsonFile("config.json")
                .AddJsonFile($"config.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
        }

        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<AppSettings>(Configuration.GetSubKey("AppSettings"));

            // Add MVC services to the services container.
            services.AddMvc();

            // Add EF services to the services container
            services.AddEntityFramework()
                        .AddSqlServer()
                        .AddDbContext<MusicStoreContext>(options =>
                        {
                            var val = Configuration.Get("Data:MusicStore:ConnectionString");
                            options.UseSqlServer(val);
                        });

            // Inject DbContext as per Request context
            services.AddScoped<MusicStoreContext>();
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
                app.UseErrorPage(ErrorPageOptions.ShowAll);
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
                    defaults: new {controller = "MusicStoreApi", action = "Index"});
                routes.MapRoute(
                    name: "version",
                    template: "version/{action}",
                    defaults: new {controller = "VersionApi", action = "Index"});
                routes.MapRoute(
                    name: "mvc",
                    template: "mvc/{action}/{id?}",
                    defaults: new {controller = "MusicStoreMvc", action = "Index"});


                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                // Uncomment the following line to add a route for porting Web API 2 controllers.
                // routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
            });
        }
    }
}
