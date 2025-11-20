import React from 'react'

const VideoCard = ({info}) => {
  console.log(info)
  // const{title}=info.snippet.localized
  const{channelTitle,publishedAt}=info.snippet
  const{viewCount}=info.statistics
  const{url}=info.snippet.thumbnails.maxres
  return (
    <div>
      <div className='w-full '>
        <div>
          <img className='w-full rounded-2xl' src={url} alt="" />
        </div>
        <p>{info?.snippet?.localized.title}</p>
        <span>{channelTitle}</span><span>{publishedAt}</span>
        <p>{viewCount}</p>
      </div>
    </div>
  )
}

export default VideoCard