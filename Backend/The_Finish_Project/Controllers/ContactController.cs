using BL;
using DTO.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : Controller
    {
        IContactBL _ContactBL;
        public ContactController(IContactBL ContactBL)
        {
            this._ContactBL = ContactBL;
        }

        // GET: api/<User_Controller>
        [HttpGet]
        public async Task<List<ContactDTO>> GetContact()
        {
            List<ContactDTO> user = await _ContactBL.GetContact();
            return user;
        }

        // GET api/<User_Controller>/5
        [HttpGet("{id}")]
        public async Task<ContactDTO> GetByIdContact(int id)
        {
            ContactDTO user = await _ContactBL.GetByIdContact(id);
            return user;
        }

        // POST api/<User_Controller>
        [HttpPost]
        ///  [Route("Login")]
        public async Task<ContactDTO> AddContact([FromBody] ContactDTO newUser)
        {
            ContactDTO insertedUser = await _ContactBL.AddContact(newUser);
            return insertedUser;
        }

        // PUT api/<User_Controller>/5
        [HttpPut]
        public async Task<ContactDTO> updateContact([FromBody] ContactDTO userdto)
        {
            ContactDTO user = await _ContactBL.updateContact(userdto);

            return user;
        }

        // DELETE api/<User_Controller>/5
        [HttpDelete("{id}")]
        public async Task<bool> DeleteContact(int id)
        {
            bool user = await _ContactBL.DeleteContact(id);
            return user;

        }

    }
}
