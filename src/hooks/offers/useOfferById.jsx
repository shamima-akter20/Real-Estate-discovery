import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

export default function useOfferById(id) {

    const axiosSecure = useAxiosSecure()
    console.log(id);

    const {data, isPending, refetch, status} = useQuery({
        queryKey: ['getOfferById', id],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/offers/${id}`)
            return res.data;
        }
    })
  return {data, isPending, refetch, status}
}
