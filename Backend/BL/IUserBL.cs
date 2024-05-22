using DTO.DTO;
using DL.Models;
//using Eintitees;

namespace BL
{
    public interface IUserBL
    {
        Task<UserDTO> addUser(UserDTO newUser);
        Task<List<UserDTO>> GetUsers();
        Task<UserDTO> GetById(int User_id);
        Task<UserDTO> updatUser(UserDTO user);
        Task<bool> DeleteUser(int User_id);
        Task<UserDTO> LoginUser(string email, string password);
    }
}