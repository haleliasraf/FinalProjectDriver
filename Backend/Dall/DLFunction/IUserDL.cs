using DL.Models;

namespace DL.DLFunction
{
    public interface IUserDL
    {
        Task<User> AddUser(User user);
        Task<bool> DeleteUser(int User_id);
        Task<User> GetById(int User_id);
        Task<List<User>> GetUsers();
        Task<User> LoginUser(string email, string Password);
        Task<User> updatUser(User usre);
    }
}