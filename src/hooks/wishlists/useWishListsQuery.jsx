import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

export default function useWishListsQuery(query) {

    const {key, value} = query;

    const axiosSecure = useAxiosSecure()

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getWishlists', query],
        queryFn: async()=>{
            const url = query ? `/wishlists?${key}=${value}` : `/wishlists`
            const res = await axiosSecure.get(url)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
