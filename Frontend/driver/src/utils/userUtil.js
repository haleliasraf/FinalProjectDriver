import api from './api';

const getUsers = async() => {
    return await api.get('User_').then(res => res);
}

const getUserById = async(id) => {
    return await api.get(`User_/${id}`).then(res => res);
}

const login = async(userLogin) => {
    return await api.post('User_/Login', userLogin).then(res => res);
}

const addUser = async(user) => {
    return await api.post('User_', user).then(res => res);
}
const deleteUser = async(id) => {
    return await api.delete(`User_/${id}`).then(res => res);
}
const updateUser = async(user) => {
    return await api.put('User_', user).then(res => res);
}

export {getUsers,getUserById,login,addUser,deleteUser,updateUser };