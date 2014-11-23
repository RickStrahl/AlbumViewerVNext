using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Routing;
using Microsoft.Data.Entity;

using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using AlbumViewerBusiness;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Logging.Console;
using Microsoft.AspNet.Diagnostics;

namespace MusicStoreVNext
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app,
            ILoggerFactory logFactory,
            IHostingEnvironment env)
        {
            // Setup configuration sources
            var configuration = new Configuration();
            configuration.AddJsonFile("config.json");
            //configuration.AddEnvironmentVariables();

            // dump log output to the console when running from command line
            logFactory.AddConsole();

            // Set up application services and DI
            app.UseServices(services =>
            {
                // Add EF services to the services container
                services.AddEntityFramework()
                            .AddSqlServer()
                            .AddDbContext<MusicStoreContext>(options =>
                            {
                                var val = configuration.Get("Data:MusicStoreConnection:ConnectionString");
                                options.UseSqlServer(val);
                            });

                // Inject DbContext as per Request context
                services.AddScoped<MusicStoreContext>();

                // Add MVC services to the services container
                services.AddMvc();
            });

            //if (env.EnvironmentName == "Development")
            app.UseErrorPage(ErrorPageOptions.ShowAll);

            app.UseStaticFiles();

            //AutoMapperMappings();

            // Add MVC to the request pipeline
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "api",
                    template: "api/{action}/{id?}",
                    defaults: new { controller = "MusicStoreApi", action = "Index" });
                routes.MapRoute(
                    name: "mvc",
                    template: "mvc/{action}/{id?}",
                    defaults: new { controller = "MusicStoreMvc", action = "Index" });

            });



        }

        //void AutoMapperMappings()
        //{
        //    AutoMapper.Mapper.CreateMap<Album, Album>();
        //}

    }
}
