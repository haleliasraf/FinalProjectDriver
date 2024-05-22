using BL;
using DTO.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AraeController : ControllerBase
    {

        private IAreaBL AreaBL;



        public AraeController(IAreaBL _AreaBL)
        {
            this.AreaBL = _AreaBL;
        }
        // GET: DriverController
        [HttpGet]
        public async Task<List<AreaDTO>> GetArea()
        {
            List<AreaDTO> area = await AreaBL.GetArea();
            return area;
        }



        [HttpGet("{id}")]
        public async Task<AreaDTO> GetByIdArea(int id)
        {
            AreaDTO area = await AreaBL.GetByIdArea(id);
            return area;
        }


        [HttpPost]
        public async Task<AreaDTO> AddArea(AreaDTO newArea)
        {
            AreaDTO insertedArea = await AreaBL.AddArea(newArea);
            return insertedArea;
        }

        [HttpPut]
        public async Task<AreaDTO> Put([FromBody] AreaDTO Areadto)
        {
            AreaDTO area = await AreaBL.updatArea(Areadto);

            return area;
        }


        [HttpDelete("{id}")]
        public async Task<bool> AreaDriver(int id)


        {
            bool area = await AreaBL.DeleteArea(id);
            return area;

        }
        //// GET: AraeController
        //public ActionResult Index()
        //{
        //    return View();
        //}

        //// GET: AraeController/Details/5
        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        //// GET: AraeController/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        //// POST: AraeController/Create
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

        //// GET: AraeController/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        //// POST: AraeController/Edit/5
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

        //// GET: AraeController/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: AraeController/Delete/5
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
