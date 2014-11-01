using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Routing;
using Microsoft.Data.Entity;

using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using MusicStoreBusiness;

namespace MusicStoreVNext
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            // Setup configuration sources
            var configuration = new Configuration();
            configuration.AddJsonFile("config.json");
            configuration.AddEnvironmentVariables();            

            // Set up application services
            app.UseServices(services =>
            {
                // Add EF services to the services container
                services.AddEntityFramework()
                    .AddSqlServer();

                // Configure DbContext
                //services.SetupOptions<DbContextOptions>(options =>
                //{
                //    options.UseSqlServer(configuration.Get("Data:MusicStoreConnection:ConnectionString"));
                //});

                services.AddScoped<MusicStoreContext>();
                services.SetupOptions<MusicStoreContextOptions>(options =>
                {
                    var val = configuration.Get("Data:MusicStoreConnection:ConnectionString");
                    options.UseSqlServer(val);                                        
                });

                // Add MVC services to the services container
                services.AddMvc();
            });

            app.UseStaticFiles();
       

            // Add MVC to the request pipeline
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" });

                routes.MapRoute(
                    name: "api",
                    template: "api/{controller}/{action}/{id?}");
            });

        }
    }
}
