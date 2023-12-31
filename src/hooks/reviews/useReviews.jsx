import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

export default function useReviews(query) {

    const axiosSecure = useAxiosSecure()

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getReviews', query],
        queryFn: async()=>{
            const url = query ? `/reviews?${query?.key}=${query?.value}` : `/reviews`
            const res = await axiosSecure.get(url)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
