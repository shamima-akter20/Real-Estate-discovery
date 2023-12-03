import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import axiosPublic from '../config/axios.config'

export default function useGetUserRole(email) {
    const [role, setRole] = useState('')

    const {data, status} = useQuery({
        queryKey: ['getRole'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/getRole/${email}`)
            return res.data;
        }
    })
  useEffect(()=>{
    if(status === 'success'){
        setRole(data)
    }
  }, [status, data])

  return role
}
