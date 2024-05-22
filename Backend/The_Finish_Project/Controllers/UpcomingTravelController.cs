using BL;
using DTO.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpcomingTravelController : Controller
    {

        private IUpcomingTravelsBL UpcomingTravelsBL;


        public UpcomingTravelController(IUpcomingTravelsBL _UpcomingTravelsBL)
        {
            this.UpcomingTravelsBL = _UpcomingTravelsBL;
        }
        // GET: DriverController
        [HttpGet]
        public async Task<List<UpcomingTravelDTO>> GetUpcomingTravel()
        {
            List<UpcomingTravelDTO> user = await UpcomingTravelsBL.GetUpcomingTravel();
            return user;
        }


        [HttpGet("{id}")]
        public async Task<List<UpcomingTravelDTO>> GetByIdUpcomingTravel(int id)
        {
            List<UpcomingTravelDTO> driver = await UpcomingTravelsBL.GetByIdUpcomingTravel(id);
            return driver;
        }

        [HttpPost]
        public async Task<UpcomingTravelDTO> AddUpcomingTravel(UpcomingTravelDTO newUser)
        {
            UpcomingTravelDTO insertedUser = await UpcomingTravelsBL.AddUpcomingTravel(newUser);
            return insertedUser;
        }
        [HttpPut]
        public async Task<UpcomingTravelDTO> updatUpcomingTravel([FromBody] UpcomingTravelDTO driverdto)
        {
            UpcomingTravelDTO user = await UpcomingTravelsBL.updatUpcomingTravel(driverdto);

            return user;
        }
        [HttpDelete("{id}")]
        public async Task<bool> DeleteUpcomingTravel(int id)


        {
            bool user = await UpcomingTravelsBL.DeleteUpcomingTravel(id);
            return user;

        }
    }
}
