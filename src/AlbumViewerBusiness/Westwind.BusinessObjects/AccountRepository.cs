using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Westwind.BusinessObjects;

namespace AlbumViewerBusiness
{
    // 

    public class AccountRepository : EntityFrameworkRepository<AlbumViewerContext,User>
    {
        public AccountRepository(AlbumViewerContext context)
            : base(context)
        { }

        public async Task<bool> Authenticate(string username, string password)
        {
            // TODO: Do proper password hashing - for now DEMO CODE 
            // var hashedPassword = AppUtils.HashPassword(password);
            var hashedPassword = password;

            var user = Context.Users.FirstOrDefault(usr => usr.Username == username && usr.Password == hashedPassword);
            if (user == null)
                return false;
            
            return true;
        }

        public async Task<User> AuthenticateAndLoadUser(string username, string password)
        {
            // TODO: Do proper password hashing - for now DEMO CODE 
            // var hashedPassword = AppUtils.HashPassword(password);
            var hashedPassword = password;

            var user = Context.Users
                          .FirstOrDefault(usr => usr.Username == username &&
                                                 usr.Password == hashedPassword);
            return user;
        }

        //protected override bool OnBeforeSave(User entity)
        //{
        //    // TODO: hash password
        //    //entity.Password = AppUtils.HashPassword();
        //    return base.OnBeforeSave(entity);
        //}
    }
}
