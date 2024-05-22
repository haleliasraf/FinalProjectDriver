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
    public class ContactBL : IContactBL
    {


        private IContactDL _ContactDL;
        private IMapper _mapper;
        public ContactBL(IContactDL ContactDL, IMapper _mapper)
        {
            this._ContactDL = ContactDL;
            this._mapper = _mapper;
        }

        public async Task<ContactDTO> AddContact(ContactDTO newUserDTO)
        {
            try
            {
                Contact newUser = _mapper.Map<Contact>(newUserDTO);

                Contact insertedUser = await _ContactDL.AddContact(newUser);

                return _mapper.Map<ContactDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public async Task<List<ContactDTO>> GetContact()
        {
            try
            {

                List<Contact> insertedUser = await this._ContactDL.GetContact();

                return _mapper.Map<List<ContactDTO>>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<ContactDTO> GetByIdContact(int User_id)
        {
            try
            {

                Contact insertedUser = await this._ContactDL.GetByIdContact(User_id);

                return _mapper.Map<ContactDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<ContactDTO> updateContact(ContactDTO userdto)
        {
            try
            {
                Contact newUser = _mapper.Map<Contact>(userdto);

                Contact insertedUser = await this._ContactDL.updateContact(newUser);

                return _mapper.Map<ContactDTO>(insertedUser);
            }
            catch (Exception ex)
            {
                return null;
                throw ex;
            }

        }
        public async Task<bool> DeleteContact(int User_id)
        {
            try
            {

                bool deletedUser = await this._ContactDL.DeleteContact(User_id);

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
