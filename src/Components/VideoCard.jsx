import React from 'react'

const VideoCard = ({info}) => {
    console.log(JSON.stringify(info,null,2))
  return (
    <div>
        <div>
            <img src={info?.snippet?.thumbnails?.default?.url} alt="" />
        </div>
    </div>
  )
}

export default VideoCard