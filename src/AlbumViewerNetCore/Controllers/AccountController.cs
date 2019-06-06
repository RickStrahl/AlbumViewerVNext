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
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using AlbumViewerBusiness.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Westwind.AspNetCore.Security;


namespace AlbumViewerAspNetCore
{
    [Authorize()]
    [ServiceFilter(typeof(ApiExceptionFilter))]
    public class AccountController : Controller
    {
        public ApplicationConfiguration Configuration { get; }
        private AccountRepository accountRepo;

        /// <summary>
        /// Hack - not threadsafe and won't work across load balancer
        /// </summary>
        private static Dictionary<string, DateTime> cancelledTokens = new Dictionary<string, DateTime>();

        public AccountController(AccountRepository actRepo,
            ApplicationConfiguration configuration)
        {
            Configuration = configuration;
            accountRepo = actRepo;
        }



        /// <summary>
        /// Token authentication login
        /// </summary>
        /// <param name="loginUser"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        [Route("api/authenticate")]
        public async Task<object> Authenticate([FromBody] User loginUser)
        {
            var user = await accountRepo.AuthenticateAndLoadUser(loginUser.Username, loginUser.Password);
            if (user == null)
                throw new ApiException("Invalid Login Credentials", 401);

            // create a state object we can serialize as a single claim
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


        [AllowAnonymous]
        [HttpGet]
        [Route("api/logout")]
        public  bool Logout()
        {
            // Cookie Signout
            //await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            if (User.Identity.IsAuthenticated)
                ExpireToken();

            return true;
        }

        [HttpGet]
        [Route("api/isAuthenticated")]
        public bool IsAuthenthenticated()
        {
            if (!User.Identity.IsAuthenticated || IsTokenExpired())
                return false;

            return true;
        }

        #region Token Expiration
        private void ExpireToken()
        {
            string id = ((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(s => s.Type == "jti")?.Value;
            if (id != null)
                cancelledTokens.Add(id, DateTime.UtcNow.AddMinutes(App.Configuration.JwtToken.TokenTimeoutMinutes));

            RemoveExpiredTokens();
        }

        private bool IsTokenExpired()
        {
            string id = ((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(s => s.Type == "jti")?.Value;
            if (cancelledTokens.ContainsKey(id))
                return true;

            return false;
        }

        private void RemoveExpiredTokens()
        {
            // remove expired tokens
            var dt = DateTime.UtcNow.AddMinutes(App.Configuration.JwtToken.TokenTimeoutMinutes);
            var cancelledTokenIds = cancelledTokens.Where(kv => kv.Value > dt).Select(kv => kv.Key);
            foreach (var key in cancelledTokenIds)
                cancelledTokens.Remove(key);
        }
        #endregion

        #region Obsolete

        /// <summary>
        ///  Cookie Authentication login (not used anymore)
        /// </summary>
        /// <param name="loginUser"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        [Route("api/login")]
        public async Task<bool> Login([FromBody] User loginUser)
        {
            var user = await accountRepo.AuthenticateAndLoadUser(loginUser.Username, loginUser.Password);
            if (user == null)
                throw new ApiException("Invalid Login Credentials", 401);

            var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);
            identity.AddClaim(new Claim(ClaimTypes.Name, user.Username));

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
        #endregion

    }
}
