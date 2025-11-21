import React, { useEffect } from 'react'
import { Youtube_Popular_Videos } from '../utils/Constants'
import {useDispatch,useSelector} from 'react-redux'
import { addVideos } from '../Slices/PopularVideoSlice'
const usePopularVideos = (categoryId) => {
    const dispatch=useDispatch()
    const popularVideos=useSelector(store=>store?.popular)
    useEffect(() => {
        const fetchPopular = () => {
            fetch(`${Youtube_Popular_Videos}${categoryId}&key=${import.meta.env.VITE_YOUTUBE_API}`).then(res => res.json()).then(res => {dispatch(addVideos(res?.items));console.log(res) })
        }
        if(popularVideos.length === 0){
            console.log(popularVideos.length)
            console.log("get data"); 
            fetchPopular()
        }
       
    }, [dispatch,popularVideos.length,categoryId])


}

export default usePopularVideos