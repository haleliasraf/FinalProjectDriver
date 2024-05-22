using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DL.DLFunction;
using DL.Models;
using DTO.DTO;

namespace BL
{
    public class DriverBL : IDriverBL
    {
        private IDriverDL _driverDL;
        private IMapper _mapper;
        public DriverBL(IDriverDL driverDL, IMapper _mapper)
        {
            this._driverDL = driverDL;
            this._mapper = _mapper;
        }

        public async Task<DriverDTO> addDriver(DriverDTO newDriverDTO)
        {
            try
            {
                Driver newUser = _mapper.Map<Driver>(newDriverDTO);

                Driver insertedDriver = await _driverDL.AddDriver(newUser);

                return _mapper.Map<DriverDTO>(insertedDriver);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public async Task<List<DriverDTO>> GetDriver()
        {
            try
            {

                List<Driver> insertedDriver = await _driverDL.GetDriver();

                return _mapper.Map<List<DriverDTO>>(insertedDriver);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<DriverDTO> GetByIdDriver(int Driver_id)
        {
            try
            {

                Driver insertedDriverr = await _driverDL.GetByIdDriver(Driver_id);

                return _mapper.Map<DriverDTO>(insertedDriverr);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<DriverDTO> updatDriver(DriverDTO Driverdto)
        {
            try
            {
                Driver newDriver = _mapper.Map<Driver>(Driverdto);

                Driver insertedDriver = await _driverDL.updateDriver(newDriver);

                return _mapper.Map<DriverDTO>(insertedDriver);
            }
            catch (Exception ex)
            {
                return null;
                throw ex;
            }

        }
        public async Task<bool> DeleteDriver(int Driver_id)
        {
            try
            {

                bool deletedDriver = await _driverDL.DeleteDriver(Driver_id);

                return deletedDriver;
            }
            catch (Exception ex)
            {
                //return null;
                throw ex;
            }

        }
    }
}
