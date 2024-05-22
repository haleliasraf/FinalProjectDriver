using DL.Models;

namespace DL.DLFunction
{
    public interface IStatusDL
    {
        Task<Status> AddStatus(Status status);
        Task<bool> DeleteStatus(int status_id);
        Task<Status> GetByIdStatus(int status_id);
        Task<List<Status>> GetStatus();
        Task<Status> updateStatus(Status status);
    }
}