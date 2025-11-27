import { useSearchParams } from 'react-router-dom'
import YoutubePlayer from './YoutubePlayer'
import { useEffect, useState } from 'react'
import { resetAbsSidebar, setSideBar } from '../Slices/AppSettings'
import { useDispatch } from 'react-redux'
import Header from './Header'
import SideBar from './SideBar'
import RecomendedCard from './RecommendedCard'
import { useSelector } from 'react-redux'
import useGetVideoDetail from '../hooks/useGetVideoDetail'
import FontIcon from './FontIcon'
import { useBeautifulDescription } from '../hooks/useBeautifulDescription'
import { ScrollRestoration } from 'react-router-dom'
import useGetComments from '../hooks/useGetComments'
import Comment from './Comment'
import VideoButtons from './VideoButtons'
import useGetChannelInfo from '../hooks/useGetChannelInfo'
import ViewConverter from '../utils/ViewConverter'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import LiveChat from './LiveChat'

import { Dummy_Comments } from '../utils/Constants'
import CommentItem from './CommentItem'
const Watch = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const[showDummy,setShowDummy]=useState(false)
  const[showLiveChat,setShowLiveChat]=useState(false)
  const [searchParams] = useSearchParams()
  const dispach = useDispatch()
  const query = searchParams.get('v')
  const { comments } = useGetComments(query)
 
  useGetVideoDetail(query)

  const popularVideos = useSelector(store => store?.popular)
  
  const { videoInfo } = useSelector(store => store.video)
  
  const { channelInfo } = useGetChannelInfo(videoInfo?.snippet?.channelId)
  
  const { short, full } = useBeautifulDescription(videoInfo?.snippet?.description)
  useEffect(() => {
    const handleResize = () => {

      setShowComments(prev => {
        // console.log('prev' + prev);
        const next = window.VisualViewport?.width || document.documentElement.clientWidth > 600
        // console.log('next ' + window.innerWidth + next)
        return next
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    dispach(setSideBar(false))
    // dispach(setAbsSidebar(true))
    return () => {
      dispach(setSideBar(true))
      dispach(resetAbsSidebar())
    }
  }, [])
  return (
    <>
      <ScrollRestoration />
      <div className='font-[Roboto] '>
        <Header />
        <SideBar />
        <div className="px-0 sm:px-2 mx-auto lg:px-15  pt-0 sm:pt-10 flex justify-center flex-col gap-x-6 lg:flex-row lg:gap-y-6  ">
          <div className='shrink-1    grow-1 2xl:grow-0 2xl:basis-6xl '>

            <div className='w-full aspect-video h-auto rounded-none md:rounded-xl overflow-hidden '>
              <YoutubePlayer videoId={query} />


            </div>
            <div className='py-4 px-2 sm:px-0'>
              <p className=' text-black text-2xl  font-bold'>{videoInfo?.snippet?.title}</p>
              <div className='flex flex-col justify-between xl:flex-row'>
                <div className=' py-2 flex gap-2 justify-start items-center'>
                  <div className='w-12 h-12 overflow-hidden'>
                    <img className='w-full h-full rounded-4xl' src={channelInfo?.snippet.thumbnails.high.url} alt="" />
                  </div>
                  <div >
                    <p>{videoInfo?.snippet?.channelTitle}</p>
                    <span className='text-xs text-gray-400'>{ViewConverter(channelInfo?.statistics?.subscriberCount)}</span>
                  </div>
                  <button className='bg-black rounded-4xl text-white px-2 py-2'>Subscribe</button>
                </div>
                <div className='flex py-2 space-x-4 sm:space-x-4 overflow-x-scroll'>
                  <FontIcon children={ViewConverter(videoInfo?.statistics?.likeCount)} icon={faThumbsUp} className={'text-xl'} />
                  <VideoButtons />

                </div>
              </div>
            </div>

            <div className='px-2 sm:px-0text-sm leading-6 space-y-3 text-gray-800 overflow-hidden'>
              <div className={`${isExpanded ? 'max-h-none ' : 'max-h-32'}`} dangerouslySetInnerHTML={{ __html: `<p class="${isExpanded ? '' : 'line-clamp-1'}">${isExpanded ? full : short} </p>` }} >


              </div>
              <button onClick={() => setIsExpanded(!isExpanded)} >{isExpanded ? 'show less' : '...'}</button>
            </div>

            <div className='px-4 py-4'>
              <button className='bg-gray-100 py-2 mb-2 w-full rounded-md  ' onClick={() => setShowComments(!showComments)}>
                <p className='text-left pl-3 font-semibold'>Comments</p>
                <div className='flex items-center px-2 space-x-3'>
                  <div className='rounded-full  overflow-hidden shrink-0'>
                    <img className=' w-8' src={comments[1]?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="img" />
                  </div>
                  <div className='text-black text-md ' dangerouslySetInnerHTML={{ __html: `<p class="line-clamp-2">${comments[1]?.snippet?.topLevelComment?.snippet?.textDisplay}</p>` }}>
                  </div>

                </div>
              </button>

              <button className='bg-gray-100 px-3 py-2' onClick={()=>setShowDummy(!showDummy)}>Dummy Comments</button>
              <button className='bg-gray-100 px-3 py-2' onClick={()=>setShowLiveChat(!showLiveChat)}>Live Chat</button>
            </div>

            <div className='px-3 pb-4 sm:px-0 ' >
              {showComments && comments.map(comment => <Comment key={comment.id} info={comment} />)}
              {showDummy &&(
                <div>
                  {Dummy_Comments.map(c=><CommentItem comment={c} />)}
                </div>
              ) }
              {showLiveChat && <LiveChat/>}
            </div>

          </div>
          <div className='max-w-100 px-2 sm:px-0'>
            <div className='flex flex-col gap-y-3 ' >
              {popularVideos.map(vid => <RecomendedCard info={vid} />)}
              {/* <RecomendedCard info={popularVideos[0]} /> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Watch