using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Hosting;
using System.Reflection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Logging.Console;
using Microsoft.AspNet.Diagnostics;
using Microsoft.AspNet.Routing;
using Microsoft.Framework.DependencyInjection;

namespace AspVNextFromScratch
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
// Set up application services and DI
app.UseServices(services =>
{                
    services.AddMvc();
});

app.UseStaticFiles();
app.UseErrorPage(ErrorPageOptions.ShowAll);

if (env.EnvironmentName == "Development")
    app.UseErrorPage(ErrorPageOptions.ShowAll);



            app.Use(next => async ctx =>
            {
                var time = DateTime.UtcNow;
                Console.WriteLine("Started: " + ctx.Request.Path);

                ctx.Response.Headers.Add("Custom-Header", new string[1] { "ID" });
                await next(ctx);

                var ms = DateTime.UtcNow.Subtract(time).TotalMilliseconds;
                Console.WriteLine(
                    string.Format("Complete: {0} ({1}ms)",
                    ctx.Request.Path, ms.ToString("n2"))
                );
            });


            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" });

                routes.MapRoute(
                    name: "api",
                    template: "api/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" }
                );


            });

            //app.Run(async ctx =>
            //{
            //    ctx.Response.ContentType = "text/plain";
            //    await ctx.Response.WriteAsync(
            //                "Hello World from vNext!!! The KRE Version is: " +
            //                GetKlrVersion());
            //});
        }

        public static string GetKlrVersion()
        {
            var assembly = typeof(Program).GetTypeInfo().Assembly;
            var attr = assembly.
                GetCustomAttribute<AssemblyInformationalVersionAttribute>();
            return attr.InformationalVersion;
        }
    }
}
