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
    public class StatusBL : IStatusBL
    {

        private IStatusDL statusDL;
        private IMapper _mapper;
        public StatusBL(IStatusDL StatusDL, IMapper _mapper)
        {
            this.statusDL = StatusDL;
            this._mapper = _mapper;
        }

        public async Task<StatusDTO> AddStatus(StatusDTO newUserDTO)
        {
            try
            {
                Status newUser = _mapper.Map<Status>(newUserDTO);

                Status insertedUser = await statusDL.AddStatus(newUser);

                return _mapper.Map<StatusDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public async Task<List<StatusDTO>> GetStatus()
        {
            try
            {

                List<Status> insertedUser = await this.statusDL.GetStatus();

                return _mapper.Map<List<StatusDTO>>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<StatusDTO> GetByIdStatus(int User_id)
        {
            try
            {

                Status insertedUser = await this.statusDL.GetByIdStatus(User_id);

                return _mapper.Map<StatusDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<StatusDTO> updateStatus(StatusDTO userdto)
        {
            try
            {
                Status newUser = _mapper.Map<Status>(userdto);

                Status insertedUser = await this.statusDL.updateStatus(newUser);

                return _mapper.Map<StatusDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                return null;
                throw ex;
            }

        }
        public async Task<bool> DeleteStatus(int User_id)
        {
            try
            {

                bool deletedUser = await this.statusDL.DeleteStatus(User_id);

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
