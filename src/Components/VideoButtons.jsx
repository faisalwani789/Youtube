import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown,faShare,faDownload,faBookmark,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import FontIcon from './FontIcon'
const VideoButtons = () => {
  return (
    <>
    <FontIcon children={'4m'} icon={faThumbsUp} className={'text-xl'} />
                <FontIcon icon={faThumbsDown} className={'text-xl'} />
                <FontIcon children={'Share'} icon={faShare} className={'text-xl'} />
                <FontIcon children={'download'} icon={faDownload} className={'text-xl'} />
                <FontIcon children={'Save'} icon={faBookmark} className={'text-lg'} />
                <FontIcon icon={faEllipsisVertical} className={'text-xl'} />
    </>
  )
}

export default VideoButtons