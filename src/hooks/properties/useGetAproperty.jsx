import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

export default function useGetAProperties(id) {

    const axiosSecure = useAxiosSecure()

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getAProperty', id],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/properties/${id}`)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
