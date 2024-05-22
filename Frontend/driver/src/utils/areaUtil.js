import api from './api';

const getAreas = async() => {
    return await api.get('Arae').then(res => res);
}

const getAreaById = async(id) => {
    return await api.get(`Arae/${id}`).then(res => res);
}

const addArea = async(area) => {
    return await api.post('Arae', area).then(res => res);
}
const deleteArea = async(id) => {
    return await api.delete(`Arae/${id}`).then(res => res);
}
const updateArea = async(area) => {
    return await api.put('Arae', area).then(res => res);
}
export{ getAreas,getAreaById,addArea,deleteArea,updateArea}
