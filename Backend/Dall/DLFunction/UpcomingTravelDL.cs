using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace DL.DLFunction
{
    public class UpcomingTravelD : IUpcomingTravelD
    {

        private DriverDbContext _driverContext;
        public UpcomingTravelD(DriverDbContext _driverContext)
        {
                this._driverContext = _driverContext;
        }
        public async Task<UpcomingTravel> AddUpcomingTravel(UpcomingTravel upcomingTravel)
        {
            try
            {

                    _driverContext.UpcomingTravels.Add(upcomingTravel);
                    await _driverContext.SaveChangesAsync();

                return upcomingTravel;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<UpcomingTravel>> GetUpcomingTravel()
        {
            try
            {

                List<UpcomingTravel> upcomingTravel = await _driverContext.UpcomingTravels.Include(ut => ut.User)
                    .Include(ut => ut.Driver)
                    .Include(s => s.Status).OrderByDescending(x => x.Date)
                    .ToListAsync();

                return upcomingTravel;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<List<UpcomingTravel>> GetByUserIdUpcomingTravel(int User_id)
        {
            try
            {
                List<UpcomingTravel> UpcomingTravels = await _driverContext.UpcomingTravels
                    .Where(UpcomingTravel => UpcomingTravel.UserId == User_id && UpcomingTravel.Date >= DateTime.Now.Date)
                    .Include(sh => sh.User)
                    .Include(s => s.Status)
                    .Include(sh => sh.Driver).ToListAsync();

                return UpcomingTravels;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<UpcomingTravel>> GetByIdUpcomingTravel(int id)
        {
            try
            {
                List<UpcomingTravel> _upcomingTravel = await _driverContext.UpcomingTravels.Where(s => s.Id == id )
                    .Include(s => s.Area)
                    .Include(s => s.Status)
                    .Include(s => s.User)
                    .Include(s => s.Driver).ToListAsync();

                return _upcomingTravel;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
  


        public async Task<UpcomingTravel> updatUpcomingTravel(UpcomingTravel upcomingTravel)
        {
            try
            {
                _driverContext.UpcomingTravels.Update(upcomingTravel);
                UpcomingTravel _upcomingTravel = await _driverContext.UpcomingTravels.FirstOrDefaultAsync(x => x.Id == upcomingTravel.Id);
                await _driverContext.SaveChangesAsync();
                return _upcomingTravel;
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex + "userDL_update");
                return null;
            }
        }


            public async Task<bool> DeleteUpcomingTravel(int upcomingTravel_id){
            try
            {
                UpcomingTravel _upcomingTravel = await _driverContext.UpcomingTravels.FirstOrDefaultAsync(x => x.Id == upcomingTravel_id);
                if (_upcomingTravel != null)
                {
                    _driverContext.UpcomingTravels.Remove(_upcomingTravel);
                    await _driverContext.SaveChangesAsync();


                    return true;
                }

                throw new Exception(" the UpcomingTravel not  found");
            }
            catch (Exception ex)
            {
                return false;//לבדוק איל אפשר לעשות בצורה יותר 

                throw ex;
            }
        }


    }
}
