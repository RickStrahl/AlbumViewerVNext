using AlbumViewerAspNetCore;
using AlbumViewerBusiness;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using NUnit.Framework;

namespace AlbumViewerUnitTest
{
    [TestFixture]
    public class AccountControllerTests
    {
        [Test]
        public void LoginShouldNotAuthenticateInvalidUser()
        {
            var accountRepository = Substitute.For<IAccountRepository>();
            accountRepository.AuthenticateAndLoadUser("User", "Password").ReturnsNull();

            var sut = new AccountController(accountRepository);

            var exception = Assert.ThrowsAsync<ApiException>(async () =>
                await sut.Login(new User {Username = "User", Password = "Password"}));
            Assert.AreEqual(exception.Message, "Invalid Login Credentials");
            Assert.AreEqual(exception.StatusCode, 401);
        }
    }
}
