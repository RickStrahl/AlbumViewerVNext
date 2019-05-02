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
using System.IdentityModel.Tokens.Jwt;
using AlbumViewerBusiness.Configuration;
using Westwind.AspNetCore.Security;
using Westwind.Web;

namespace AlbumViewerAspNetCore
{
    [Authorize()]
    [ServiceFilter(typeof(ApiExceptionFilter))]        
    public class AccountController : Controller
    {
        public ApplicationConfiguration Configuration { get; }
        private AccountRepository accountRepo;

        public AccountController(AccountRepository actRepo,
                                 ApplicationConfiguration configuration)
        {
            Configuration = configuration;
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
        [HttpPost]
        [Route("api/authenticate")]
        public async Task<object> Authenticate([FromBody] User loginUser)
        {
            var user = await accountRepo.AuthenticateAndLoadUser(loginUser.Username, loginUser.Password);
            if (user == null)
                throw new ApiException("Invalid Login Credentials", 401);

            // create a state object we can serialize as a claim
            var UserState = new UserState();

            // track user state through our claim
            UserState.UserIdInt = user.Id;
            UserState.Name = user.Fullname;
            UserState.Email = user.Username;

            // create a new token with token helper and add our claim
            var token = JwtHelper.GetJwtToken(
                user.Username,
                Configuration.JwtToken.SigningKey,
                Configuration.JwtToken.Issuer,
                Configuration.JwtToken.Audience,
                TimeSpan.FromMinutes(Configuration.JwtToken.TokenTimeoutMinutes),
                new[]
                {
                    new Claim("UserState", UserState.ToString())
                });

            return new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expires = token.ValidTo,
                displayName = user.Fullname
            };
        }

        //var user = await accountRepo.AuthenticateAndLoadUser(loginUser.Username, loginUser.Password);
        //if (user == null)
        //    throw new ApiException("Invalid Login Credentials", 401);

        //var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);
        //identity.AddClaim(new Claim(ClaimTypes.Name, user.Username));

        //if (user.Fullname == null)
        //    user.Fullname = string.Empty;
        //identity.AddClaim(new Claim("FullName", user.Fullname));

        //var props = new AuthenticationProperties()
        //{
        //    ExpiresUtc = DateTime.UtcNow.AddHours(1)
        //};

        //await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
        //    new ClaimsPrincipal(identity));

        //    return true;
        //}



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
