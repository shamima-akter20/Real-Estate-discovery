import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

export default function useUsersQuery(query) {
    const axiosSecure = useAxiosSecure()

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getAllUsers', query],
        queryFn: async()=>{
            const url = query ? `/users?${query?.key}=${query?.value}` : `/users`
            const res = await axiosSecure.get(url)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
