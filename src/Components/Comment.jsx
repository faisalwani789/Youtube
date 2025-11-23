import { faChevronDown, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FontIcon from './FontIcon'
import moment from 'moment'
import SignIn from './SignIn'
import CommentIcon from './CommentIcon'

const Comment = ({ info }) => {
    console.log(info)
    const name = info?.snippet?.topLevelComment?.snippet?.authorDisplayName
    const comment = info?.snippet?.topLevelComment?.snippet?.textDisplay
    const img = info?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
    const time = info?.snippet?.topLevelComment?.snippet?.publishedAt
    const likes = info?.snippet?.topLevelComment?.snippet?.likeCount
    const replies = info?.snippet?.totalReplyCount
    return (
        <div className='flex items-start gap-4'>
            <div className='rounded-full w-12 h-12 overflow-hidden'>
                <img className='w-full h-full' src={img} alt="img" />
            </div>
            <div className=''>
                <div>
                    <span className='text-sm font-semibold' >{name}  .</span>
                    <span className='text-xs text-gray-500'>{moment(time).fromNow()}</span>
                </div>

                <div className='text-black text-md' dangerouslySetInnerHTML={{__html:`<p>${comment}</p>`}}></div>
                <div className='flex items-center  gap-2'>
                    
                    <CommentIcon icon={faThumbsUp}/>
                    <span>{likes}</span>
                    <CommentIcon icon={faThumbsDown}/>
                    {/* <FontIcon children={'Reply'} className={'text-lg'} /> */}
                </div>

                {/* <FontIcon icon={faChevronDown} className={'text-lg'} children={'Replies'} /> */}
                <button className='text-blue-500 hover:bg-blue-100 px-2 py-1 hover:outline-0  flex gap-2 items-center   rounded-4xl'>
                        <FontAwesomeIcon icon={faChevronDown} className='text-lg text-blue-400' />
                    {replies} replies
                </button>

            </div>
        </div>
    )
}

export default Comment