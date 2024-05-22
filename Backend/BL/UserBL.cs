using AutoMapper;
using DL.DLFunction;
using DL.Models;
using DTO.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class UserBL : IUserBL
    {
        private IUserDL UserDL;
        private IMapper _mapper;
        public UserBL(IUserDL userDl, IMapper _mapper)
        {
            this.UserDL = userDl;
            this._mapper = _mapper;
        }

        public async Task<UserDTO> addUser(UserDTO newUserDTO)
        {
            try
            {
                User newUser = _mapper.Map<User>(newUserDTO);

                User insertedUser = await UserDL.AddUser(newUser);

                return _mapper.Map<UserDTO>(insertedUser);
            }
            catch (Exception ex) { 
                throw ex; 
            }

        }


        public async Task<List<UserDTO>> GetUsers()
        {
            try
           {

                List<User> insertedUser =  await this.UserDL.GetUsers();

                return _mapper.Map<List<UserDTO>>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<UserDTO> GetById(int User_id)
        {
            try
            {

                User insertedUser = await this.UserDL.GetById(User_id);

                return _mapper.Map<UserDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<UserDTO> updatUser(UserDTO userdto)
        {
            try
            {
                User newUser = _mapper.Map<User>(userdto);

                User insertedUser = await this.UserDL.updatUser(newUser);

                return _mapper.Map<UserDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                return null;
                throw ex;
            }

        }
        public async Task<bool>DeleteUser(int User_id)
        {
            try
            {

                bool deletedUser = await this.UserDL.DeleteUser(User_id);

                return deletedUser;
            }
            catch (Exception ex)
            {
                //return null;
                throw ex;
            }

        }
        public async Task<UserDTO> LoginUser( string email, string password)
        {
            try
            {
             

                User insertedUser = await this.UserDL.LoginUser(email, password);

                return _mapper.Map<UserDTO>(insertedUser);
            }
            catch (Exception ex)
            {
             
                throw ex;
            }

        }
    }
}
