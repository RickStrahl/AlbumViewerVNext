using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore.Infrastructure;
using AlbumViewerBusiness;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting.Internal;
using System.IO;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Serialization;

namespace AlbumViewerNetCore
{
    public class Startup
    {
        readonly IHostingEnvironment HostingEnvironment;

       IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            HostingEnvironment = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            

            Configuration = builder.Build();
        }

       

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AlbumViewerContext>(builder =>
            {
                string useSqLite = Configuration["Data:AlbumViewer:useSqLite"];
                if (useSqLite != "true")
                {
                    // NOTE: This requires a Constructor that has a DbContextOptions parameter
                    var connStr = Configuration["Data:AlbumViewer:SqlServerConnectionString"];
                    builder.UseSqlServer(connStr);
                }
                else
                {
                    // Note this path has to have full  access for the Web user in order 
                    // to create the DB and write to it.
                    var connStr = "Data Source=" + Path.Combine(HostingEnvironment.ContentRootPath, "AlbumViewerData.sqlite");
                    builder.UseSqlite(connStr);
                }
            });


            services.AddAuthentication();
            
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials() );
            });

            // Make configuration available for EF configuration
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.AddSingleton<IConfiguration>(Configuration);

            services.AddTransient<AlbumRepository>();

            // Add framework services.
            services.AddMvc().AddJsonOptions(opt =>
            {
                var resolver = opt.SerializerSettings.ContractResolver;
                if (resolver != null)
                {
                    var res = resolver as DefaultContractResolver;
                    res.NamingStrategy = null;
                }
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, AlbumViewerContext albumContext)
        {
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                loggerFactory.AddConsole(Configuration.GetSection("Logging"));
                loggerFactory.AddDebug();
            }
            else
            {                 
                app.UseExceptionHandler(errorApp =>

                    // Application level exception handler here - this is just a place holder
                    errorApp.Run(async (context) =>
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "text/html";
                        await context.Response.WriteAsync("<html><body>\r\n");
                        await
                            context.Response.WriteAsync(
                                "We're sorry, we encountered an un-expected issue with your application.<br>\r\n");

                        // Capture the exception
                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            // This error would not normally be exposed to the client
                            await
                                context.Response.WriteAsync("<br>Error: " +
                                                            HtmlEncoder.Default.Encode(error.Error.Message) + "<br>\r\n");
                        }
                        await context.Response.WriteAsync("<br><a href=\"/\">Home</a><br>\r\n");
                        await context.Response.WriteAsync("</body></html>\r\n");
                        await context.Response.WriteAsync(new string(' ', 512)); // Padding for IE
                    }));


                //app.UseExceptionHandler("/");
                //app.UseExceptionHandler("/Home/Error");
            }

            app.UseCors("CorsPolicy");
            
            // Enable Cookie Auth with automatic user policy
            app.UseCookieAuthentication(new CookieAuthenticationOptions()
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                LoginPath = "/api/login"
            });

            app.UseDatabaseErrorPage();
            app.UseStatusCodePages();

            app.UseDefaultFiles(); // so index.html is not required
            app.UseStaticFiles();
            
            // put last so header configs like CORS or Cookies etc can fire
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });


            bool result = AlbumViewerDataImporter.EnsureAlbumData(albumContext,
                           Path.Combine(env.WebRootPath, "data//albums.js"));


        }
    }
}
