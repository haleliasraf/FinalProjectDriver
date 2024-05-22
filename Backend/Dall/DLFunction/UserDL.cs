using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DL.DLFunction
{
    public class UserDL : IUserDL
    {
        private DriverDbContext _driverContext;
        public UserDL(DriverDbContext driverContext)
        {
            _driverContext = driverContext;
        }
        //
        public async Task<User> AddUser(User user)
        {
            try
            {

                User forndUser = _driverContext.Users.FirstOrDefault(u => u.Email.Equals(user.Email));
                if (forndUser == null)
                {
                    _driverContext.Users.Add(user);
                    await _driverContext.SaveChangesAsync();
                    return user;

                }
                return null;
                //else
                //{
                //    //throw new Exception("user already exsist");
                //}
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<User>> GetUsers()
        {
            try
            {

                List<User> users = await _driverContext.Users.ToListAsync();

                return users;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }




        public async Task<User> GetById(int User_id)
        {
            try
            {
                User _user = await _driverContext.Users.FindAsync(User_id);

                return _user;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<User> updatUser(User usre)
        {
            try
            {
                _driverContext.Users.Update(usre);
                User _user = await _driverContext.Users.FirstOrDefaultAsync(x => x.Id == usre.Id);
                await _driverContext.SaveChangesAsync();

                return _user;
            }
            catch (Exception ex)
            {
       
                Console.WriteLine(ex+"userDL_update");
                return null;
            }
        }


        public async Task<bool> DeleteUser(int User_id)
        {
            try
            {
                User _user = await _driverContext.Users.FirstOrDefaultAsync(x=>x.Id==User_id);
                if (_user != null)
                {
                    _driverContext.Users.Remove(_user);
                    await _driverContext.SaveChangesAsync();


                    return true;
                }

                return true;
            }
            catch (Exception ex)
            {
                return false;//לבדוק איל אפשר לעשות בצורה יותר 

                throw ex;
            }
        }
        

        public async Task<User> LoginUser(string email, string password)
        {
            try
            {
                User _user = await _driverContext.Users.FirstOrDefaultAsync(u => u.Email.Equals(email)&&u.Password.Equals(password));
                if (_user == null)
                    return null;
                return _user;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
