using DTO.DTO;

namespace BL
{
    public interface IShipBL
    {
  
        Task<ShipDTO> addship(ShipDTO newDriverDTO);
        Task<bool> DeleteShip(int Driver_id);
        Task<ShipDTO> GetByIdShip(int Ship_id);
        Task<List<ShipDTO>> GetByUserIdShip(int User_id);
        Task<List<ShipDTO>> GetShip();
        Task<ShipDTO> updateShip(ShipDTO shipdto);
    }
}