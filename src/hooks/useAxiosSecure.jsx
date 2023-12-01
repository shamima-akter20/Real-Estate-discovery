import axios from 'axios';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../Authentication/Firebase/firebase.config';

const auth = getAuth(app)

const axiosSecure = axios.create({
    baseURL:  import.meta.env.VITE_AXIOS_BASE_URL,
    withCredentials: true,
})

export default function useAxiosSecure() {


    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        const statusCode = error?.response?.status;
        // console.log(statusCode === 401)
        if (statusCode === 401 || statusCode === 403) {
            // console.log(logOut)
            signOut(auth)
            
        }
        return Promise.reject(error);
    });

    return axiosSecure;
}
