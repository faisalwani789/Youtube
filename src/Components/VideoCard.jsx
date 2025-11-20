import React from 'react'
import {Link} from 'react-router-dom'
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
        <p>{title}</p>
        <span>{channelTitle}</span><span>{publishedAt}</span>
        <p>{viewCount}</p>
      </div>
    </div>
     </Link>
  )
}

export default VideoCard