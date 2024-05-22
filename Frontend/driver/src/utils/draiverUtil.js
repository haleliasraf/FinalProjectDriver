import api from './api';

const getDrivers = async() => {
    return await api.get('Driver').then(res => res);
}

const getDriverById = async(id) => {
    return await api.get(`Driver/${id}`).then(res => res);
}

const addDriver = async(driver) => {
    return await api.post('Driver', driver).then(res => res);
}
const deleteDriver = async(id) => {
    return await api.delete(`Driver/${id}`).then(res => res);
}
const updateDriver = async(driver) => {
    return await api.put('Driver', driver).then(res => res);
}

export {getDrivers,getDriverById,addDriver ,deleteDriver,updateDriver};