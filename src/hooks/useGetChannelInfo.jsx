import  { useEffect, useState } from 'react'
import { Channel_Details } from '../utils/Constants'

const useGetChannelInfo = (channelId) => {
    const [channelInfo,setChannelInfo]=useState(null)
   
    useEffect(()=>{
         const fetchInfo=()=>{
        fetch(`${Channel_Details}${channelId}&key=${import.meta.env.VITE_YOUTUBE_API}`).then(res=>res.json()).then(res=>setChannelInfo(res))
    }
        fetchInfo()
    },[channelId])
  return {channelInfo}
}

export default useGetChannelInfo