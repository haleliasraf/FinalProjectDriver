using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;


namespace DL.DLFunction
{
    public class StatusDL : IStatusDL
    {
        private DriverDbContext _driverContext;
        public StatusDL(DriverDbContext driverContext)
        {
            _driverContext = driverContext;
        }
        //
        public async Task<Status> AddStatus(Status status)
        {
            try
            {
                _driverContext.Statuses.Add(status);
                await _driverContext.SaveChangesAsync();
                return status;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<List<Status>> GetStatus()
        {
            try
            {

                List<Status> status = await _driverContext.Statuses.ToListAsync();

                return status;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<Status> GetByIdStatus(int status_id)
        {
            try
            {
                Status status = await _driverContext.Statuses.FindAsync(status_id);

                return status;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<Status> updateStatus(Status status)
        {
            try
            {
                _driverContext.Statuses.Update(status);
                Status _status = await _driverContext.Statuses.FirstOrDefaultAsync(x => x.Id == status.Id);
                await _driverContext.SaveChangesAsync();
                return _status;
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex + "AreaDL_update");
                return null;
            }
        }


        public async Task<bool> DeleteStatus(int status_id)
        {
            try
            {
                Status _status = await _driverContext.Statuses.FirstOrDefaultAsync(x => x.Id == status_id);
                if (_status != null)
                {
                    _driverContext.Statuses.Remove(_status);
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
    }
}
