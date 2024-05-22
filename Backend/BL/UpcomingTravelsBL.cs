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
    public class UpcomingTravelsBL : IUpcomingTravelsBL
    {
        private IUpcomingTravelD _UpcomingTravelDL;
        private IMapper _mapper;
        public UpcomingTravelsBL(IUpcomingTravelD UpcomingTravelD, IMapper _mapper)
        {
            this._UpcomingTravelDL = UpcomingTravelD;
            this._mapper = _mapper;
        }

        public async Task<UpcomingTravelDTO> AddUpcomingTravel(UpcomingTravelDTO newUserDTO)
        {
            try
            {
                UpcomingTravel newUser = _mapper.Map<UpcomingTravel>(newUserDTO);

                UpcomingTravel insertedUser = await _UpcomingTravelDL.AddUpcomingTravel(newUser);

                return _mapper.Map<UpcomingTravelDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public async Task<List<UpcomingTravelDTO>> GetUpcomingTravel()
        {
            try
            {

                List<UpcomingTravel> insertedUser = await this._UpcomingTravelDL.GetUpcomingTravel();

                return _mapper.Map<List<UpcomingTravelDTO>>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<List<UpcomingTravelDTO>> GetByIdUpcomingTravel(int UpcomingTravel_id)
        {
            try
            {

                List<UpcomingTravel> insertedUser = await this._UpcomingTravelDL.GetByIdUpcomingTravel(UpcomingTravel_id);

                return _mapper.Map<List<UpcomingTravelDTO>>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<UpcomingTravelDTO> updatUpcomingTravel(UpcomingTravelDTO userdto)
        {
            try
            {
                UpcomingTravel newUser = _mapper.Map<UpcomingTravel>(userdto);

                UpcomingTravel insertedUser = await this._UpcomingTravelDL.updatUpcomingTravel(newUser);

                return _mapper.Map<UpcomingTravelDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                return null;
                throw ex;
            }

        }
        public async Task<bool> DeleteUpcomingTravel(int User_id)
        {
            try
            {

                bool deletedUser = await this._UpcomingTravelDL.DeleteUpcomingTravel(User_id);

                return deletedUser;
            }
            catch (Exception ex)
            {
                //return null;
                throw ex;
            }

        }

    }
}
