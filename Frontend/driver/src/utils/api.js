import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:44376/api/",
    headers:{
        "Content-Type": "application/json"
    }
})

export const apiImage = axios.create({
    baseURL: "https://localhost:44376/api/",
    headers:{
        "Content-Type": "image/jpeg"
    }
})

export default api;