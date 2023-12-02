import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../config/axios.config';

export default function useGetAProperties(id) {

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getAProperty', id],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/properties/${id}`)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
