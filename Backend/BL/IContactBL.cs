using DTO.DTO;

namespace BL
{
    public interface IContactBL
    {
        Task<ContactDTO> AddContact(ContactDTO newUserDTO);
        Task<bool> DeleteContact(int User_id);
        Task<ContactDTO> GetByIdContact(int User_id);
        Task<List<ContactDTO>> GetContact();
        Task<ContactDTO> updateContact(ContactDTO userdto);
    }
}