using BL;
using DTO.DTO;
using Microsoft.AspNetCore.Mvc;
using DL.Models;
using DL.DLFunction;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Dal_Finish_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class User_Controller : ControllerBase
    {
        IUserBL _userBl;
        public User_Controller(IUserBL userBl)
        {
            this._userBl = userBl;
        }

        // GET: api/<User_Controller>
        [HttpGet]
        public async Task<List<UserDTO>> GetUsers()
        {
            List<UserDTO> user = await _userBl.GetUsers();
            return user;
        }

        // GET api/<User_Controller>/5
        [HttpGet("{id}")]
        public async Task<UserDTO> GetById(int id)
        {
            UserDTO user = await _userBl.GetById(id);
            return user;
        }

        // POST api/<User_Controller>
        [HttpPost]
        ///  [Route("Login")]
        public async Task<ActionResult<UserDTO>> AddUser([FromBody] UserDTO newUser)
        {
            try
            {
                UserDTO insertedUser = await _userBl.addUser(newUser);
                if (insertedUser != null)
                {
                    return Ok(insertedUser);
                }
                return StatusCode(204, "email for user already exsist");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // PUT api/<User_Controller>/5
        [HttpPut]
        public async Task<UserDTO> Put([FromBody] UserDTO userdto)
        {
            UserDTO user = await _userBl.updatUser(userdto);

            return user;
        }

        // DELETE api/<User_Controller>/5
        [HttpDelete("{id}")]
        public async Task<bool> DeleteUser(int id)
        {
            bool user = await _userBl.DeleteUser(id);
            return user;

        }

        [HttpPost]
        [Route("Login")]

        public async Task<ActionResult<UserDTO>>LoginUser(UserLoginDTO userLogin)
        {
            UserDTO user = await _userBl.LoginUser(userLogin.Email, userLogin.Password);
            if (user != null)
            {
                return Ok(user);
            } 
            else {
                return StatusCode(204, "email or password no correct");
            }
        }
    }

  
  }

