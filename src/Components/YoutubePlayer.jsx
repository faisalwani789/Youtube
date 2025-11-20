import React from 'react'
import Youtube from 'react-youtube'
import { useState } from 'react';
const YoutubePlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  // Fixed player options
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: videoId,
      rel: 0,
      modestbranding: 1,
      // enablejsapi: 1, // Important for CORS
      // origin: window.location.origin, // Important for CORS
    },
  };

  const onReady = (event) => {
    console.log('YouTube player is ready', event.target);
    setPlayer(event.target);
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
    // Fallback if iframe fails to load
    if (error.data === 150) {
      console.log('Embedding restricted, trying alternative approach');
    }
  };

  const onStateChange = (event) => {
    console.log('Player state changed:', event.data);
  };



  return (

    <Youtube
      key={videoId} // Key prop forces re-render when videoId changes
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onError={onError}
      onStateChange={onStateChange}
      style={{  }}
    />
  )    
};

export default YoutubePlayer