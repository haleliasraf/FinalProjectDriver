using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DL.Models;
using Microsoft.EntityFrameworkCore;


namespace DL.DLFunction
{
    public class AreaDL : IAreaDL
    {
        private DriverDbContext _driverContext;


        public AreaDL(DriverDbContext driverContext)
        {
            _driverContext = driverContext;
        }
        //
        public async Task<Area> AddArea(Area area)
        {
            try
            {
                _driverContext.Areas.Add(area);
                await _driverContext.SaveChangesAsync();
                return area;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Area>> GetArea()
        {
            try
            {

                List<Area> areas = await _driverContext.Areas.ToListAsync();

                return areas;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }




        public async Task<Area> GetByIdArea(int area_id)
        {
            try
            {
                Area area = await _driverContext.Areas.FindAsync(area_id);

                return area;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<Area> updateArea(Area area)
        {
            try
            {
                _driverContext.Areas.Update(area);
                Area _area = await _driverContext.Areas.FirstOrDefaultAsync(x => x.Id == area.Id);
                await _driverContext.SaveChangesAsync();
                return _area;
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex + "AreaDL_update");
                return null;
            }
        }


        public async Task<bool> DeleteArea(int area_id)
        {
            try
            {
                Area _area = await _driverContext.Areas.FirstOrDefaultAsync(x => x.Id == area_id);
                if (_area != null)
                {
                    _driverContext.Areas.Remove(_area);
                    await _driverContext.SaveChangesAsync();


                    return true;
                }
                throw new Exception("the area not found");
            }
            catch (Exception ex)
            {
                return false;//לבדוק איל אפשר לעשות בצורה יותר 

                throw ex;
            }
        }

        //public async Task LoginUser(string Name, string Phone, string Password)
        //{
        //    try
        //    {
        //        Area _user = await _driverContext.Areas.FindAsync(Name, Phone, Password);

        //        return;
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //}
    }
}
