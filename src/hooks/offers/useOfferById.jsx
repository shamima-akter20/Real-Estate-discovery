import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../config/axios.config';

export default function useOfferById(id) {

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getOfferById', id],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/offers/${id}`)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
