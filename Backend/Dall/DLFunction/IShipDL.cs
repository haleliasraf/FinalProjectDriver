using DL.Models;

namespace DL.DLFunction
{
    public interface IShipDL
    {
        Task<Ship> AddShip(Ship ship);
        Task<bool> DeleteShip(int ship_id);
        Task<Ship> GetByIdShip(int ship_id);
        Task<List<Ship>> GetByUserIdShip(int User_id);
        Task<List<Ship>> GetShip();
        Task<Ship> updateShip(Ship ship);
    }
}