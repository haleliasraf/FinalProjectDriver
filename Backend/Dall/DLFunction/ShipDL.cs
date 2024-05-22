using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.DLFunction
{
    public class ShipDL : IShipDL
    {
        private DriverDbContext _driverContext;


        public ShipDL(DriverDbContext driverContext)
        {
            _driverContext = driverContext;
        }
        //
        public async Task<Ship> AddShip(Ship ship)
        {
            try
            {
                _driverContext.Ships.Add(ship);
                await _driverContext.SaveChangesAsync();
                return ship;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Ship>> GetShip()
        {
            try
            {

                List<Ship> _ships = await _driverContext.Ships.ToListAsync();

                return _ships;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<Ship> GetByIdShip(int ship_id)
        {
            try
            {
                Ship ship = await _driverContext.Ships
      .Include(s => s.Status) // Include the Status navigation property
      .FirstOrDefaultAsync(s => s.Id == ship_id);

                return ship;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Ship>> GetByUserIdShip(int User_id)
        {
            try
            {
                List<Ship> ship = await _driverContext.Ships.Where(ship => ship.UserId == User_id)
                    .Include(sh => sh.User)
                    .Include(sh => sh.Driver).ToListAsync();

                return ship;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<Ship> updateShip(Ship ship)
        {
            try
            {
                _driverContext.Ships.Update(ship);
                Ship _ship = await _driverContext.Ships.FirstOrDefaultAsync(x => x.Id == ship.Id);
                await _driverContext.SaveChangesAsync();
                return _ship;
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex + "userDL_update");
                return null;
            }
        }


        public async Task<bool> DeleteShip(int ship_id)
        {
            try
            {
                Ship _ship = await _driverContext.Ships.FirstOrDefaultAsync(x => x.Id == ship_id);
                if (_ship != null)
                {
                    _driverContext.Ships.Remove(_ship);
                    await _driverContext.SaveChangesAsync();


                    return true;
                }
                else { throw new Exception("ship not found"); }
            }
            catch (Exception ex)
            {

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
        //}}
        //internal class ShipDL
        //{
        //    private readonly IDataSource data;
        //    public ShipDL(IDataSource _data)
        //    {
        //        data = _data;
        //    }
        //}
    }
}
