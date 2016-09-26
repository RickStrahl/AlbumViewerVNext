using AlbumViewerBusiness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Security.Claims;

using System.Security.Authentication;
using Newtonsoft.Json;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Cors;

namespace AlbumViewerAspNet5
{
    
    [ApiExceptionFilter]
    [EnableCors("CorsPolicy")]
    public class AccountController : Controller
    {
        AlbumViewerContext context;
        IServiceProvider serviceProvider;

        public AccountController(AlbumViewerContext ctx, 
            IServiceProvider svcProvider)
            //SignInManager<User> signInManager)
        {
            context = ctx;
            serviceProvider = svcProvider;
     
        }

        //public override void OnActionExecuting(ActionExecutingContext context)
        //{
        //    Response.Headers.Add("Access-Control-Allow-Origin", new string[] { "*" });
        //    base.OnActionExecuting(context);
        //}


        //public override void OnActionExecuted(ActionExecutedContext context)
        //{
        //    if (context.Exception == null)
        //    {
        //        base.OnActionExecuted(context);
        //        return;
        //    }

        //    if (context.Exception is ApiException)
        //    {
        //        var ex = context.Exception as ApiException;
        //        context.Exception = null;
        //        var apiError = new ApiError(ex.Message);
   
        //        Response.StatusCode = ex.StatusCode;
        //        context.Result = new JsonResult(apiError);
        //    }
        //}



        [HttpPost]
        [Route("api/login")]
        public async Task<bool> Login([FromBody]  User loginUser)
        {
            var accountBus = new AccountRepository(context);
            var user = await accountBus.AuthenticateAndLoadUser(loginUser.Username, loginUser.Password);

            if (user == null)
                throw new ApiException("Invalid Login Credential", 401);


            var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);
            identity.AddClaim(new Claim(ClaimTypes.Name, user.Username))    ;
           
            if (user.Fullname == null)
                user.Fullname = string.Empty;
            identity.AddClaim(new Claim("FullName", user.Fullname));

            await HttpContext.Authentication.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(identity));

            return true;
        } 

        [HttpGet]
        [Route("api/logout")]
        public async Task<bool> Logout()
        {
            await HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            //await signinManager.SignOutAsync();
            return true;
        }

        [HttpGet]
        [Route("api/isAuthenticated")]
        public async Task<bool> IsAuthenthenticated()
        {
            //throw new ApiException("User is not validated.",401);
            return this.User.Identity.IsAuthenticated;
        }

    }
}
