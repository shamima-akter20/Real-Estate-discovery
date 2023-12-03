import axios from "axios";
const HOST_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBGG_API_KEY}`

const uploadImage = async(imageData) =>{
    const res = await axios.post(HOST_URL, imageData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return res;
}

export default uploadImage;