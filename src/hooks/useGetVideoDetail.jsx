import React from 'react'
import { VideoDetails } from '../utils/Constants'
const useGetVideoDetail = (id) => {
    fetch(`${VideoDetails}${id}&key=${import.meta.env.VITE_YOUTUBE_API}`).then(res=>res.json()).then(res=>console.log(res))
}

export default useGetVideoDetail