using DL.Models;

namespace DL.DLFunction
{
    public interface IContactDL
    {
        Task<Contact> AddContact(Contact contact);
        Task<bool> DeleteContact(int contact_id);
        Task<Contact> GetByIdContact(int contact_id);
        Task<List<Contact>> GetContact();
        Task<Contact> updateContact(Contact contact);
    }
}