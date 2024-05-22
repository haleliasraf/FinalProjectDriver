using DTO.DTO;

namespace BL
{
    public interface IAreaBL
    {
        Task<AreaDTO> AddArea(AreaDTO newAreaDTO);
        Task<bool> DeleteArea(int Area_id);
        Task<List<AreaDTO>> GetArea();
        Task<AreaDTO> GetByIdArea(int Area_id);
        Task<AreaDTO> updatArea(AreaDTO Areadto);
    }
}