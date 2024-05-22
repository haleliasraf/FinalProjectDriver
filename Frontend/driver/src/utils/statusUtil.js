import api from './api';

const getStatuss = async() => {
    return await api.get('Status').then(res => res);
}

const getStatusById = async(id) => {
    return await api.get(`Status/${id}`).then(res => res);
}

const addStatus = async(status) => {
    return await api.post('Status', status).then(res => res);
}
const deleteStatus = async(id) => {
    return await api.delete(`Status/${id}`).then(res => res);
}
const updateStatus = async(status) => {
    return await api.put('Status', status).then(res => res);
}
export{ getStatuss,getStatusById,addStatus,deleteStatus,updateStatus}
