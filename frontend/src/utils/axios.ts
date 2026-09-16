import axios from "axios";

const api = axios.create({
    baseURL:"/api/urls",
    withCredentials:true
})

export default api;