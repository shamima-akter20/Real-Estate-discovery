import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

export default function useOffersQuery(query) {

    const {key, value} = query;

    const axiosSecure = useAxiosSecure()

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getOffers', query],
        queryFn: async()=>{
            const url = query ? `/offers?${key}=${value}` : `/offers`
            const res = await axiosSecure.get(url)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
