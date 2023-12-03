import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const HOST_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBGG_API_KEY}`

export default function useImageHost() {
    const {data, status, mutateAsync} = useMutation({
        mutationKey: ["hostImage"],
        mutationFn: async(fileList)=> {
            console.log(fileList);
            const res = await axios.post(HOST_URL, fileList, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            return res.data;
        }
    })
  return {data, status, mutateAsync}
}
