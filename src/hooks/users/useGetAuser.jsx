import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';

export default function useGetAUser(email) {

    const axiosSecure = useAxiosSecure()

    const {data, isPending, refetch} = useQuery({
        queryKey: ['getAUser', email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/${email}`)
            return res.data;
        }
    })
  return {data, isPending, refetch}
}
