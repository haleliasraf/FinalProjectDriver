using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.DLFunction
{
    public class ContactDL : IContactDL
    {
        private DriverDbContext _driverContext;


        public ContactDL(DriverDbContext driverContext)
        {
            _driverContext = driverContext;
        }
        //
        public async Task<Contact> AddContact(Contact contact)
        {
            try
            {
                _driverContext.Contacts.Add(contact);
                await _driverContext.SaveChangesAsync();
                return contact;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Contact>> GetContact()
        {
            try
            {

                List<Contact> contact = await _driverContext.Contacts.OrderBy(x => x.StatusId).ToListAsync();

                return contact;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }




        public async Task<Contact> GetByIdContact(int contact_id)
        {
            try
            {
                Contact contact = await _driverContext.Contacts.FindAsync(contact_id);

                return contact;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<Contact> updateContact(Contact contact)
        {
            try
            {
                _driverContext.Contacts.Update(contact);
                Contact _contact = await _driverContext.Contacts.FirstOrDefaultAsync(x => x.Id == contact.Id);
                await _driverContext.SaveChangesAsync();
                return _contact;
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex + "userDL_update");
                return null;
            }
        }


        public async Task<bool> DeleteContact(int contact_id)
        {
            try
            {
                Contact _contact = await _driverContext.Contacts.FirstOrDefaultAsync(x => x.Id == contact_id);
                if (_contact != null)
                {
                    _driverContext.Contacts.Remove(_contact);
                    await _driverContext.SaveChangesAsync();


                    return true;
                }

                return true;
            }
            catch (Exception ex)
            {
                return false;//לבדוק איך אפשר לעשות בצורה יותר 

                throw ex;
            }
        }


    }
}
