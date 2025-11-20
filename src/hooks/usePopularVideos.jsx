import React, { useEffect } from 'react'
import { Youtube_Popular_Videos } from '../utils/Constants'
import {useDispatch,useSelector} from 'react-redux'
import { addVideos } from '../Slices/PopularVideoSlice'
const usePopularVideos = () => {
    const dispatch=useDispatch()
    const popularVideos=useSelector(store=>store?.popular)
    useEffect(() => {
        const fetchPopular = () => {
            fetch(Youtube_Popular_Videos).then(res => res.json()).then(res => {dispatch(addVideos(res?.items)) })
        }
        if(popularVideos.length === 0){
            console.log(popularVideos.length)
            console.log("get data"); fetchPopular()
        }
       
    }, [dispatch,popularVideos.length])


}

export default usePopularVideos