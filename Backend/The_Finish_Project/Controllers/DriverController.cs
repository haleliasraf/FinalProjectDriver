using BL;
using DTO.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {


        private IDriverBL DriverBL;
         

        public DriverController(IDriverBL _DriverBL)
        {
            this.DriverBL = _DriverBL;
        }
        // GET: DriverController
        [HttpGet]
        public async Task<List<DriverDTO>> GetDriver()
        {
            List<DriverDTO> user = await DriverBL.GetDriver();
            return user;
        }


        [HttpGet("{id}")]
        public async Task<DriverDTO> GetByIdDriver(int id)
        {
            DriverDTO driver = await DriverBL.GetByIdDriver(id);
            return driver;
        }

        [HttpPost]
        public async Task<DriverDTO> addDriver(DriverDTO newUser)
        {
            DriverDTO insertedUser = await DriverBL.addDriver(newUser);
            return insertedUser;
        }
        [HttpPut]
        public async Task<DriverDTO> Put([FromBody] DriverDTO driverdto)
        {
            DriverDTO user = await DriverBL.updatDriver(driverdto);

            return user;
        }
        [HttpDelete("{id}")]
        public async Task<bool> DeleteDriver(int id)
        
        
        {
            bool user = await DriverBL.DeleteDriver(id);
            return user;

        }

        // GET: DriverController/Details/5
        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        // GET: DriverController/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        // POST: DriverController/Create
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create(IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: DriverController/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        //// POST: DriverController/Edit/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: DriverController/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: DriverController/Delete/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Delete(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}
