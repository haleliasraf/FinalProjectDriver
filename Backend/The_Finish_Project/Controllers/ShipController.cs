using BL;
using DL.DLFunction;
using DTO.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipController : ControllerBase
    {
        private IShipBL ShipBL;



        public ShipController(IShipBL _shipBL)
        {
            this.ShipBL = _shipBL;
        }
        
        [HttpGet]
        public async Task<List<ShipDTO>> GetShip()
        {
            List<ShipDTO> area = await ShipBL.GetShip();
            return area;
        }



        [HttpGet("{id}")]
        public async Task<ShipDTO> GetShipById(int id)
        {
            ShipDTO area = await ShipBL.GetByIdShip(id);
            return area;
        }

        [HttpGet("GetShipsByUserId/{userId}")]
        public async Task<List<ShipDTO>> GetShipsByUserId(int userId)
        {
            List<ShipDTO> ship = await ShipBL.GetByUserIdShip(userId);
            return ship;
        }


        [HttpPost]
        public async Task<ShipDTO> addship([FromBody] ShipDTO newArea)
        {
            ShipDTO insertedArea = await ShipBL.addship(newArea);
            return insertedArea;
        }

        [HttpPut]
        public async Task<ShipDTO> Put([FromBody] ShipDTO Areadto)
        {
            ShipDTO area = await ShipBL.updateShip(Areadto);

            return area;
        }


        [HttpDelete("{id}")]
        public async Task<bool> DeleteShip(int id)


        {
            bool area = await ShipBL.DeleteShip(id);
            return area;

        }

      
    }
}
