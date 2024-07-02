using DL.Models;
using DTO.DTO;

namespace BL
{
    public interface IUpcomingTravelsBL
    {
        Task<UpcomingTravelDTO> AddUpcomingTravel(UpcomingTravelDTO newUserDTO);
        Task<bool> DeleteUpcomingTravel(int User_id);
        Task<List<UpcomingTravelDTO>> GetByIdUpcomingTravel(int UpcomingTravel_id);
        Task<List<UpcomingTravelDTO>> GetByUserIdUpcomingTravel(int UpcomingTravel_id);

        Task<List<UpcomingTravelDTO>> GetUpcomingTravel();
        Task<UpcomingTravelDTO> updatUpcomingTravel(UpcomingTravelDTO userdto);
    }
}