import React, { useEffect, useState } from 'react'
import TopButton from './TopButton'
import { ButtonData, Youtube_api } from '../utils/Constants'
import VideoCard from './VideoCard'
const Main = () => {
 
  const[isActive ,setIsActive]=useState('All')
  const[videos,setVideos]=useState(null)
  const handleClick=(tab)=>{
    setIsActive(tab)
  }
  useEffect(()=>{
    const getYoutubeVideos=async()=>{
     fetch(Youtube_api).then((res)=>res.json()).then((res)=>setVideos(res))
    }
    getYoutubeVideos()
  },[])
 
  return (
    <div>
      <div className='flex flex-nowrap gap-3 overflow-x-scroll hide-Scroll '>
      {ButtonData.map(button=><TopButton key={button.text} text={button.text} onClick={()=>handleClick(button.text)} isActive={isActive}/>)}
     </div>
      <VideoCard info={videos?.items?.[0]}/>
      </div>
  )
}

export default Main