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
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace AlbumViewerAspNet5
{
    
    [ApiExceptionFilter]    
    [EnableCors("CorsPolicy")]
    public class AccountController : Controller
    {
        AlbumViewerContext context;
        IServiceProvider serviceProvider;
        private AccountRepository accountRepo;

        public AccountController(AlbumViewerContext ctx, 
            IServiceProvider svcProvider, 
            AccountRepository actRepo)            
        {
            context = ctx;
            serviceProvider = svcProvider;
            accountRepo = actRepo;
        }
        

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

            
        [AllowAnonymous]                    
        [HttpPost]
        [Route("api/login")]
        public async Task<bool> Login([FromBody]  User loginUser)
        {            
            var user = await accountRepo.AuthenticateAndLoadUser(loginUser.Username, loginUser.Password);

            if (user == null)
                throw new ApiException("Invalid Login Credentials", 401);


            var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);
            identity.AddClaim(new Claim(ClaimTypes.Name, user.Username))    ;
           
            if (user.Fullname == null)
                user.Fullname = string.Empty;
            identity.AddClaim(new Claim("FullName", user.Fullname));

            await HttpContext.Authentication.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(identity));

            return true;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("api/logout")]
        public async Task<bool> Logout()
        {
            await HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);            
            return true;
        }

        [HttpGet]
        [Route("api/isAuthenticated")]
        public async Task<bool> IsAuthenthenticated()
        {            
            return User.Identity.IsAuthenticated;
        }

    }
}
