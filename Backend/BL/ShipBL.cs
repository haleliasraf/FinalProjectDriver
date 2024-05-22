using AutoMapper;
using DL.DLFunction;
using DL.Models;
using DTO.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ShipBL : IShipBL
    
    {
        private IShipDL _shipDL;
        private IMapper _mapper;
        public ShipBL(IShipDL ShipDL, IMapper _mapper)
        {
            this._shipDL = ShipDL;
            this._mapper = _mapper;
        }

        public async Task<ShipDTO> addship(ShipDTO newDriverDTO)
        {
            try
            {
                Ship newUser = _mapper.Map<Ship>(newDriverDTO);

                Ship insertedDriver = await _shipDL.AddShip(newUser);

                return _mapper.Map<ShipDTO>(insertedDriver);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public async Task<List<ShipDTO>> GetShip()
        {
            try
            {

                List<Ship> insertedDriver = await _shipDL.GetShip();

                return _mapper.Map<List<ShipDTO>>(insertedDriver);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<ShipDTO> GetByIdShip(int Ship_id)
        {
            try
            {

                Ship insertedShip = await _shipDL.GetByIdShip(Ship_id);

                return _mapper.Map<ShipDTO>(insertedShip);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<List<ShipDTO>> GetByUserIdShip(int User_id)
        {
            try
            {

                List<Ship> insertedShip = await _shipDL.GetByUserIdShip(User_id);

                return _mapper.Map<List<ShipDTO>>(insertedShip);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<ShipDTO> updateShip(ShipDTO shipdto)
        {
            try
            {
                Ship newship = _mapper.Map<Ship>(shipdto);


                Ship insertedShip = await _shipDL.updateShip(newship);

                return _mapper.Map<ShipDTO>(insertedShip);
            }
            catch (Exception ex)
            {
                return null;
                throw ex;
            }

        }
        public async Task<bool> DeleteShip(int Driver_id)
        {
            try
            {

                bool deletedShip = await _shipDL.DeleteShip(Driver_id);

                return deletedShip;
            }
            catch (Exception ex)
            {
                //return null;
                throw ex;
            }

        }

        //public Task<ShipDTO> addDriver(ShipDTO newDriverDTO)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
