import axios from "axios";

const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL
})

export default axiosPublic;