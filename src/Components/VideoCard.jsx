import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ViewConverter from '../utils/ViewConverter'
const VideoCard = ({ info }) => {

  const { title } = info.snippet
  const { channelTitle, publishedAt } = info.snippet
  const { viewCount } = info.statistics ||''
  const url = info?.snippet?.thumbnails?.maxres?.url ||  info?.snippet?.thumbnails?.high?.url
  if (!url) return null
  return (


    
     
      <div className='w-full '>
         <Link to={`/watch?v=${info.id?.videoId|| info.id}`}>
        <div>
          <img className='w-full sm:rounded-2xl' src={url} alt="thumbnail" />
        </div>
        <p className=' text-sm font-[Roboto] font-semibold break-words whitespace-normal'>{title}</p>
        <p className='text-xs text-gray-500 '>{channelTitle}</p>
        <span className='text-xs text-gray-400'>{moment(publishedAt).fromNow()} . </span>
        <span className='text-xs text-gray-400'>{ViewConverter(viewCount)}</span>
        </Link>
      </div>
      
    
    
   
     
  )
}

export default VideoCard