import api from './api';

const getUpcomings = async() => {
    return await api.get('UpcomingTravel').then(res => res);
}

const getUpcomingById = async(id) => {
    return await api.get(`UpcomingTravel/${id}`).then(res => res);
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
export{ getUpcomings,getUpcomingById,addUpcoming,deleteUpcoming,updateUpcoming}
