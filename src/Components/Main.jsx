import React, { useEffect, useState } from 'react'
import TopButton from './TopButton'
import { ButtonData } from '../utils/Constants'
import usePopularVideos from '../hooks/usePopularVideos'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
const Main = () => {
  usePopularVideos(0)
  const popularVideos = useSelector(store => store?.popular)
  const [isActive, setIsActive] = useState('All')
  if (popularVideos.length === 0) {
    return
  }

  const handleClick = (tab) => {
    setIsActive(tab)
  }
  //  useEffect(()=>{
  //   const timer=setTimeout(()=>{
  //       const popularVideos=useSelector(store=>store?.popular)
  //   },4000)
  //   return ()=>clearTimeout(timer)
  //  })
  return (
    <div className='min-w-0 px-4'>
      <div className='flex flex-nowrap gap-3 overflow-x-scroll hide-Scroll py-3 '>
        {ButtonData.map(button => <TopButton key={button.text} text={button.text} onClick={() => handleClick(button.text)} isActive={isActive} />)}

      </div>

      <div className=' grid  lg:grid-cols-3 md:grid-cols-2 gap-4 '>
        {popularVideos?.map(item=><VideoCard info={item}  />)}
        {/* <VideoCard info={popularVideos[3]} />
        <VideoCard info={popularVideos[4]} />
        <VideoCard info={popularVideos[5]} />
        <VideoCard info={popularVideos[6]} />
        <VideoCard info={popularVideos[7]} />
        <VideoCard info={popularVideos[8]} /> */}
      </div>

    </div>

  )
}

export default Main