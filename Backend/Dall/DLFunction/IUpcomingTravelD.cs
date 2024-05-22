using DL.Models;

namespace DL.DLFunction
{
    public interface IUpcomingTravelD
    {
        Task<UpcomingTravel> AddUpcomingTravel(UpcomingTravel upcomingTravel);
        Task<bool> DeleteUpcomingTravel(int upcomingTravel_id);
        Task<List<UpcomingTravel>> GetByIdUpcomingTravel(int upcomingTravel_id);
        Task<List<UpcomingTravel>> GetUpcomingTravel();
        Task<UpcomingTravel> updatUpcomingTravel(UpcomingTravel upcomingTravel);
    }
}