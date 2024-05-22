using BL;
using DTO.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {

        IStatusBL _statusBL;
        public StatusController(IStatusBL statusBL)
        {
            this._statusBL = statusBL;
        }

        // GET: api/<User_Controller>
        [HttpGet]
        public async Task<List<StatusDTO>> GetStatus()
        {
            List<StatusDTO> user = await _statusBL.GetStatus();
            return user;
        }

        // GET api/<User_Controller>/5
        [HttpGet("{id}")]
        public async Task<StatusDTO> GetByIdStatus(int id)
        {
            StatusDTO user = await _statusBL.GetByIdStatus(id);
            return user;
        }

        // POST api/<User_Controller>
        [HttpPost]
        ///  [Route("Login")]
        public async Task<StatusDTO> AddStatus([FromBody] StatusDTO newUser)
        {
            StatusDTO insertedUser = await _statusBL.AddStatus(newUser);
            return insertedUser;
        }

        // PUT api/<User_Controller>/5
        [HttpPut]
        public async Task<StatusDTO> updateStatus([FromBody] StatusDTO userdto)
        {
            StatusDTO user = await _statusBL.updateStatus(userdto);

            return user;
        }

        // DELETE api/<User_Controller>/5
        [HttpDelete("{id}")]
        public async Task<bool> DeleteStatus(int id)
        {
            bool user = await _statusBL.DeleteStatus(id);
            return user;

        }

    }
}
