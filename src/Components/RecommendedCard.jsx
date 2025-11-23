import React from 'react'
import { Link } from 'react-router-dom'
import ViewConverter from "../utils/ViewConverter"
import moment from 'moment'
const RecommendedCard = ({ info }) => {
  const title = info?.snippet?.localized?.title
  const  channelTitle  = info?.snippet?.channelTitle
  const  publishedAt =info?.snippet?.publishedAt
  const viewCount = info?.statistics?.viewCount
  const url = info?.snippet?.thumbnails?.maxres?.url 
  if (!url) return null
  return (
    
      <div>
        <Link to={`/watch?v=${info.id}`}>

        <div className='flex '>
          <div className='w-45 shrink-0'>
            <img className='w-full rounded-lg' src={url} alt="" />
          </div>
          <div className='pl-4'>
            <p className='max-w-30 pr-2 text-sm font-[Roboto] font-semibold line-clamp-3 break-words whitespace-normal '>{title}</p>
            <p className='text-xs text-gray-500 '>{channelTitle}</p>
            <span className='text-xs text-gray-400'>{moment(publishedAt).fromNow()} . </span>
            <span className='text-xs text-gray-400'>{ViewConverter(viewCount) }</span>
          </div>

        </div>
        </Link>
      </div>
    
  )
}

export default RecommendedCard