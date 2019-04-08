using System.IO;
using AlbumViewerBusiness;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Cors;
using System;

namespace AlbumViewerAspNetCore
{    
    [ServiceFilter(typeof(ApiExceptionFilter))]        
    public class AccountController : Controller
    {
        private AccountRepository accountRepo;

        public AccountController(AccountRepository actRepo)            
        {
            accountRepo = actRepo;
        }

           
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

            var props = new AuthenticationProperties()
            {
                ExpiresUtc = DateTime.UtcNow.AddHours(1)
            };

			await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
				new ClaimsPrincipal(identity));

			return true;
		}

        [AllowAnonymous]
        [HttpGet]
        [Route("api/logout")]
        public async Task<bool> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);            
            return true;
        }

        [HttpGet]
        [Route("api/isAuthenticated")]
        public bool IsAuthenthenticated()
        {
            return User.Identity.IsAuthenticated;
        }
    }
}
