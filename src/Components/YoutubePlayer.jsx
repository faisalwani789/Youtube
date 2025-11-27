import React from 'react'
import Youtube from 'react-youtube'
import { useState } from 'react';
const YoutubePlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  // Fixed player options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      loop: 1,
      playlist: videoId,
      rel: 0,
      modestbranding: 1,
      // enablejsapi: 1, // Important for CORS
      // origin: window.location.origin, // Important for CORS
    },
  };

  const onReady = (event) => {
    // console.log('YouTube player is ready', event.target);
    setPlayer(event.target);
  };

  


  return (

    <Youtube
      key={videoId} // Key prop forces re-render when videoId changes
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      style={{width:'100%',height:'100%',borderRadius:'16px'}}
    />
  )    
};

export default YoutubePlayer