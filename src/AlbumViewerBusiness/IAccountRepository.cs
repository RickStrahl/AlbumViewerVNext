using System.Threading.Tasks;

namespace AlbumViewerBusiness
{
    public interface IAccountRepository
    {
        Task<bool> Authenticate(string username, string password);
        Task<User> AuthenticateAndLoadUser(string username, string password);
    }
}
