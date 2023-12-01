import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../config/axios.config';

export default function useGetProperties() {

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getProperties'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/properties')
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
