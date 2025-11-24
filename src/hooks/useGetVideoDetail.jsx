import React, { useEffect} from 'react'
import { VideoDetails } from '../utils/Constants'
import { addVideo } from '../Slices/VideoSlice'
import { useDispatch } from 'react-redux'
const useGetVideoDetail = (id) => {
    const dispatch=useDispatch()
   
    useEffect(() => {
        const fetchData = () => {
            fetch(`${VideoDetails}${id}&key=${import.meta.env.VITE_YOUTUBE_API}`).then(res => res.json()).then(res => {
               
               dispatch(addVideo(res.items[0]))
            })
        }

        fetchData()
    },[id,dispatch])

}

export default useGetVideoDetail