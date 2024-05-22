import api from './api';

const getShips = async() => {
    return await api.get('Ship').then(res => res);
}

const getShipById = async(id) => {
    return await api.get(`Ship/${id}`).then(res => res);
}

const addShip = async(ship) => {
    return await api.post('Ship', ship).then(res => res);
}
const deleteShip = async(id) => {
    return await api.delete(`Ship/${id}`).then(res => res);
}
const updateShip = async(ship) => {
    return await api.put('Ship', ship).then(res => res);
}
const getShipByUserId = async(userid) => {
        return await api.get(`Ship/GetShipsByUserId/${userid}`).then(res => res);
}
export{ getShips,getShipById,addShip,deleteShip,updateShip,getShipByUserId}
