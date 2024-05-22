using DL.Models;
using DTO.DTO;

namespace BL
{
    public interface IDriverBL
    {
       // Task<DriverDTO> AddDriver(DriverDTO newDriverDTO);
        Task<DriverDTO> addDriver(DriverDTO newDriverDTO);
        Task<bool> DeleteDriver(int Driver_id);
        Task<DriverDTO> GetByIdDriver(int Driver_id);
        Task<List<DriverDTO>> GetDriver();
        Task<DriverDTO> updatDriver(DriverDTO Driverdto);
    }
}