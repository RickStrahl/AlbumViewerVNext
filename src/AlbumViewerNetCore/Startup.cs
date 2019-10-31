using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AlbumViewerBusiness;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Text;
using System.Text.Encodings.Web;
using AlbumViewerAspNetCore;
using AlbumViewerBusiness.Configuration;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Serialization;
using Serilog;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Hosting;

namespace AlbumViewerNetCore
{
    public class Startup
    {
        readonly IWebHostEnvironment HostingEnvironment;

        IConfigurationRoot Configuration { get; }

        public Startup(IWebHostEnvironment env)
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
                    builder.UseSqlServer(connStr, opt => opt.EnableRetryOnFailure());
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

            var config = new ApplicationConfiguration();
            Configuration.Bind("Application", config);
            services.AddSingleton(config);

            App.Configuration = config;

            // Add Support for strongly typed Configuration and map to class
            //services.AddOptions();
            //services.Configure<ApplicationConfiguration>(Configuration.GetSection("Application"));

            // Also make top level configuration available (for EF configuration and access to connection string)
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.AddSingleton<IConfiguration>(Configuration);

            // Cors policy is added to controllers via [EnableCors("CorsPolicy")]
            // or .UseCors("CorsPolicy") globally
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                            // required if AllowCredentials is set also
                        .SetIsOriginAllowed(s=> true)
                        //.AllowAnyOrigin()
                        .AllowAnyMethod()  // doesn't work for DELETE!
                        .WithMethods("DELETE")
                        .AllowAnyHeader()
                        .AllowCredentials()
                );
            });


            // set up and configure Cookie Authentication - make sure to call .UseAuthentication()
            //services
            //    .AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            //    .AddCookie(o =>
            //    {
            //        o.LoginPath = "/api/login";
            //        o.LogoutPath = "/api/logout";
            //    });

            // set up and configure Bearer Token Security -
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = config.JwtToken.Issuer,
                        ValidateAudience = true,
                        ValidAudience = config.JwtToken.Audience,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(config.JwtToken.SigningKey))
                    };

                });






			// Instance injection
            services.AddScoped<AlbumRepository>();
            services.AddScoped<ArtistRepository>();
            services.AddScoped<AccountRepository>();

            // Per request injections
            services.AddScoped<ApiExceptionFilter>();

       

            services.AddControllers()
                // Use classic JSON 
                .AddNewtonsoftJson(opt =>
                {
                    var resolver = opt.SerializerSettings.ContractResolver;
                    if (resolver != null)
                    {
                        var res = resolver as DefaultContractResolver;
                        res.NamingStrategy = null;
                    }

                    if (HostingEnvironment.IsDevelopment())
                        opt.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
                });
           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            IWebHostEnvironment env,
            ILoggerFactory loggerFactory,
            AlbumViewerContext albumContext,
            IConfiguration configuration)
        {

            //// Serilog config -  add logfile output
            Log.Logger = new LoggerConfiguration()
                    .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log")
                    .CreateLogger();

            loggerFactory
                .AddSerilog();


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
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
			}

            //app.UseHttpsRedirection();

            Console.WriteLine("\r\nPlatform: " + System.Runtime.InteropServices.RuntimeInformation.OSDescription);
            string useSqLite = Configuration["Data:useSqLite"];
			Console.WriteLine(useSqLite == "true" ? "SqLite" : "Sql Server");

            app.UseRouting();

            app.UseCors("CorsPolicy");


            app.UseAuthentication();
            app.UseAuthorization();

		    //app.UseDatabaseErrorPage();
            app.UseStatusCodePages();

            app.UseDefaultFiles(); // so index.html is not required
            app.UseStaticFiles();


            // Handle Lets Encrypt Route (before MVC processing!)
            // alternately use an MVC Route (in ConfigurationController)
            //app.UseRouter(r =>
            //{
            //    r.MapGet(".well-known/acme-challenge/{id}", async (request, response, routeData) =>
            //    {
            //        var id = routeData.Values["id"] as string;
            //        var file = Path.Combine(env.WebRootPath, ".well-known","acme-challenge", id);
            //        await response.SendFileAsync(file);
            //    });
            //});

            //// put last so header configs like CORS or Cookies etc can fire
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                // .RequireCors("CorsPolicy"); // doesn't seem to work - .UseCors("CorsPolicy") still required
            });

            // catch-all handler for HTML5 client routes - serve index.html
            app.Run(async context =>
            {
                // Make sure Angular output was created in wwwroot
                // Running Angular in dev mode nukes output folder!
                // so it could be missing.
                if (env.WebRootPath == null)
                    throw new InvalidOperationException("wwwroot folder doesn't exist. Please recompile your Angular Project before accessing index.html. API calls will work fine.");

		        context.Response.ContentType = "text/html";
				await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
	        });

            // Initialize Database if it doesn't exist
            AlbumViewerDataImporter.EnsureAlbumData(albumContext,
                Path.Combine(env.ContentRootPath, "albums.js"));
        }
    }
}


