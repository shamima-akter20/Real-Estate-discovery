import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../config/axios.config';

export default function useGetProperties(query) {



    const {data, isPending, refetch} = useQuery({
        queryKey: ['getProperties', query],
        queryFn: async()=>{
            const url = query ? `/properties?${query?.key}=${query?.value}` : '/properties'
            const res = await axiosPublic.get(url)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
