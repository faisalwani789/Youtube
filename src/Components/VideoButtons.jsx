import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThumbsDown, faShare, faDownload, faBookmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import FontIcon from './FontIcon'
const VideoButtons = () => {
  return (
    <>
      
      <FontIcon icon={faThumbsDown} className={'text-xl'} />
      <FontIcon children={'Share'} icon={faShare} className={'text-xl'} />
      <FontIcon children={'download'} icon={faDownload} className={'text-xl'} />
      <FontIcon children={'Save'} icon={faBookmark} className={'text-lg'} className3={'hidden sm:block'} />
      <FontIcon icon={faEllipsisVertical} className={'text-xl'} />
    </>
  )
}

export default VideoButtons