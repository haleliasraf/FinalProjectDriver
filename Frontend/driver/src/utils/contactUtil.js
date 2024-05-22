import api from './api';

const getContacts = async() => {
    return await api.get('Contact').then(res => res);
}

const getContactById = async(id) => {
    return await api.get(`Contact/${id}`).then(res => res);
}

const addContact = async(upcoming) => {
    debugger
    return await api.post('Contact', upcoming).then(res => res);
}
const deleteContact = async(id) => {
    return await api.delete(`Contact/${id}`).then(res => res);
}
const updateContact = async(upcoming) => {
    return await api.put('Contact', upcoming).then(res => res);
}
export{ getContacts,getContactById,addContact,deleteContact,updateContact}
