using DL.Models;

namespace DL.DLFunction
{
    public interface IAreaDL
    {
        Task<Area> AddArea(Area area);
        Task<bool> DeleteArea(int area_id);
        Task<List<Area>> GetArea();
        Task<Area> GetByIdArea(int area_id);
        Task<Area> updateArea(Area area);
    }
}