import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import ViewConverter from '../utils/ViewConverter'
const VideoCard = ({info}) => {
  
  const{title}=info.snippet.localized
  const{channelTitle,publishedAt}=info.snippet
  const{viewCount}=info.statistics
  const url=info?.snippet?.thumbnails?.maxres?.url || ''
  if(!url)return null
  return (
    <Link to={`/watch?v=${info.id}`}>
   
    <div>
      <div className='w-full '>
        <div>
          <img className='w-full rounded-2xl' src={url} alt="" />
        </div>
         <p className=' text-sm font-[Roboto] font-semibold '>{title}</p>
            <p className='text-xs text-gray-500'>{channelTitle}</p>
            <span className='text-xs text-gray-400'>{moment(publishedAt).fromNow()} . </span>
            <span className='text-xs text-gray-400'>{ViewConverter(viewCount) }</span>
      </div>
    </div>
     </Link>
  )
}

export default VideoCard