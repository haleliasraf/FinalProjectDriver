import api from './api';

const getUpcomings = async() => {
    return await api.get('UpcomingTravel').then(res => res);
}

const getUpcomingById = async(id) => {
    return await api.get(`UpcomingTravel/${id}`).then(res => res);
}

const getUpcomingByUserId = async(userId) => {
    return await api.get(`/UpcomingTravel/GetShipsByUserId/${userId}`).then(res => res);
}

const addUpcoming = async(upcoming) => {
    return await api.post('UpcomingTravel', upcoming).then(res => res);
}
const deleteUpcoming = async(id) => {
    return await api.delete(`UpcomingTravel/${id}`).then(res => res);
}
const updateUpcoming = async(upcoming) => {
    return await api.put('UpcomingTravel', upcoming).then(res => res);
}
// const GetByUserIdUpcomingTravel = async(userId) => {
//     return await api.get(`GetShipsByUserId/${userId}`).then(res => res);
// }
export{ getUpcomings,getUpcomingById,getUpcomingByUserId,addUpcoming,deleteUpcoming,updateUpcoming}
