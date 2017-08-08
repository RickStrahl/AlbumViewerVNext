using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AlbumViewerBusiness;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Text.Encodings.Web;
using AlbumViewerAspNetCore;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Serialization;
using Serilog;
using Microsoft.AspNetCore.Authentication.Cookies;

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
                string useSqLite = Configuration["Data:useSqLite"];
                if (useSqLite != "true")
                {
                    var connStr = Configuration["Data:SqlServerConnectionString"];
                    builder.UseSqlServer(connStr);
                }
                else
                {
                    // Note this path has to have full  access for the Web user in order 
                    // to create the DB and write to it.
                    var connStr = "Data Source=" +
                                  Path.Combine(HostingEnvironment.ContentRootPath, "AlbumViewerData.sqlite");
                    builder.UseSqlite(connStr);
                }
            });

			services.AddCookieAuthentication(o =>
			{
				o.LoginPath = "/api/login";
				o.LogoutPath = "/api/logout";
			});

	        
			services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            // Make configuration available for EF configuration
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.AddSingleton<IConfiguration>(Configuration);

			         // Instance injection
            services.AddTransient<AlbumRepository>();
            services.AddTransient<ArtistRepository>();
            services.AddTransient<AccountRepository>();

            //Log.Logger = new LoggerConfiguration()
            //        .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log")
            //        .CreateLogger();
            //services.AddSingleton(Log.Logger);

												// Per request injections
            services.AddScoped<ApiExceptionFilter>();

            // Add framework services
            services.AddMvc(options =>
                {
                    // options.Filters.Add(new ApiExceptionFilter());
                })
            .AddJsonOptions(opt =>
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
        public void Configure(IApplicationBuilder app, 
            IHostingEnvironment env, 
            ILoggerFactory loggerFactory,
            AlbumViewerContext albumContext,
            IConfiguration configuration)
        {

			// Serilog config
            Log.Logger = new LoggerConfiguration()
                    .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log")
                    .CreateLogger();

			if (env.IsDevelopment())
			{				
				//loggerFactory.WithFilter(new FilterLoggerSettings
				//	{
				//		{"Trace", LogLevel.Trace},
				//		{"Default", LogLevel.Trace},
				//		{"Microsoft", LogLevel.Warning}, // very verbose
    //                    {"System", LogLevel.Warning}
				//	})
						
				loggerFactory
					.AddDebug()
					.AddConsole()
					.AddSerilog();

				app.UseDeveloperExceptionPage();
			}
			else
			{
				loggerFactory
					//.WithFilter(new FilterLoggerSettings
					//{
					//	{"Trace", LogLevel.Trace},
					//	{"Default", LogLevel.Trace},
					//	{"Microsoft", LogLevel.Warning}, // very verbose
     //                   {"System", LogLevel.Warning}
					//})
					.AddSerilog();

				app.UseExceptionHandler(errorApp =>

						// Application level exception handler here - this is just a place holder
						errorApp.Run(async (context) =>
						{
							context.Response.StatusCode = 500;
							context.Response.ContentType = "text/html";
							await context.Response.WriteAsync("<html><body>\r\n");
							await context.Response.WriteAsync(
									"We're sorry, we encountered an un-expected issue with your application.<br>\r\n");

							// Capture the exception
							var error = context.Features.Get<IExceptionHandlerFeature>();
							if (error != null)
							{
								// This error would not normally be exposed to the client
								await
									context.Response.WriteAsync("<br>Error: " +
																HtmlEncoder.Default.Encode(error.Error.Message) +
																"<br>\r\n");
							}
							await context.Response.WriteAsync("<br><a href=\"/\">Home</a><br>\r\n");
							await context.Response.WriteAsync("</body></html>\r\n");
							await context.Response.WriteAsync(new string(' ', 512)); // Padding for IE
						}));

				//app.UseExceptionHandler("/");
				//app.UseExceptionHandler("/Home/Error");
			}

            Console.WriteLine("\r\nPlatform: " + System.Runtime.InteropServices.RuntimeInformation.OSDescription);
												string useSqLite = Configuration["Data:useSqLite"];
												Console.WriteLine(useSqLite == "true" ? "SqLite" : "Sql Server");


			app.UseAuthentication();
		
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


			// catch-all handler - serve index.html
	        app.Run(async context =>
	        {
		        context.Response.ContentType = "text/html";
				await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
	        });

            AlbumViewerDataImporter.EnsureAlbumData(albumContext,
                Path.Combine(env.ContentRootPath, "albums.js"));

        }
    }
}

