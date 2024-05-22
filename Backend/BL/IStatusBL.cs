using DTO.DTO;

namespace BL
{
    public interface IStatusBL
    {
        Task<StatusDTO> AddStatus(StatusDTO newUserDTO);
        Task<bool> DeleteStatus(int User_id);
        Task<StatusDTO> GetByIdStatus(int User_id);
        Task<List<StatusDTO>> GetStatus();
        Task<StatusDTO> updateStatus(StatusDTO userdto);
    }
}