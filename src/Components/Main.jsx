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
 
  return (
    <div className='min-w-0 px-0 sm:px-4 '>
      <div className='flex flex-nowrap gap-3 overflow-x-scroll hide-Scroll py-3 '>
        {ButtonData.map(button => <TopButton key={button.text} text={button.text} onClick={() => handleClick(button.text)} isActive={isActive} />)}

      </div>

      <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 '>
        {popularVideos?.map(item=><VideoCard key={item.etag} info={item}  />)}
        {/* <VideoCard info={popularVideos[3]} /> */}
      </div>

    </div>

  )
}

export default Main