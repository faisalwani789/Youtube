import React, { useState } from 'react'
import { VideoDetails } from '../utils/Constants'
const useGetVideoDetail = (id) => {
    const[videoDetail,setVideoDetail]=useState(null)
    fetch(`${VideoDetails}${id}&key=${import.meta.env.VITE_YOUTUBE_API}`).then(res=>res.json()).then(res=>{
        setVideoDetail(res)
        return videoDetail
    })
}

export default useGetVideoDetail