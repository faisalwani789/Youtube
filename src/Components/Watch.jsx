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
import { faThumbsUp, faThumbsDown, faShare, faDownload, faEllipsisVertical, faBookmark, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import useGetComments from '../hooks/useGetComments'
import Comment from './Comment'
const Watch = () => {
  const [searchParams] = useSearchParams()
  const dispach = useDispatch()
  const { comments } = useGetComments(searchParams.get('v'))
  useGetVideoDetail(searchParams.get('v'))

  const popularVideos = useSelector(store => store?.popular)
  const { videoInfo } = useSelector(store => store.video)

  // console.log(JSON.stringify(comments,null,2))
  const [isExpanded, setIsExpanded] = useState(false)
  const [showComments, setShowComments] = useState(window.visualViewport?.width || document.documentElement.clientWidth >600)
  // console.log(popularVideos)
  const query = searchParams.get('v')
  // console.log(query)
  const { short, full } = useBeautifulDescription(videoInfo?.snippet?.description)
  useEffect(() => {
    const handleResize = () => {
      
     setShowComments(prev=>{
      console.log('prev'+prev);
      const next=window.VisualViewport?.width || document.documentElement.clientWidth >600
      console.log('next '+window.innerWidth +next)
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
    <div className='font-[Roboto]'>
      <Header />
      <SideBar />
      <div className="px-0 lg:px-15 pt-10 flex justify-center flex-col gap-x-6 lg:flex-row lg:gap-y-6  ">
        <div className='shrink 2xl:shrink-0 max-w-240 '>
          <div className='w-full aspect-video h-auto rounded-xl overflow-hidden '>
            <YoutubePlayer videoId={query} />


          </div>
          <div className='py-4'>
            <p className=' text-black text-2xl  font-bold'>{videoInfo?.snippet?.title}</p>
            <div className='flex flex-col justify-between xl:flex-row'>
              <div className='flex items-center'>
                <div>
                  <img  alt="" />
                </div>
                <div>
                  <p>{videoInfo?.snippet?.channelTitle}</p>
                  <span>subscribers</span>
                </div>
                <button className='bg-black rounded-4xl text-white px-2 py-1'>Subscribe</button>
              </div>
              <div className='flex space-x-4'>
                <FontIcon children={'4m'} icon={faThumbsUp} className={'text-xl'} />
                <FontIcon icon={faThumbsDown} className={'text-xl'} />
                <FontIcon children={'Share'} icon={faShare} className={'text-xl'} />
                <FontIcon children={'download'} icon={faDownload} className={'text-xl'} />
                <FontIcon children={'Save'} icon={faBookmark} className={'text-lg'} />
                <FontIcon icon={faEllipsisVertical} className={'text-xl'} />

              </div>
            </div>
          </div>

          <div className='text-sm leading-6 space-y-3 text-gray-800 overflow-hidden'>
            <div className={`${isExpanded ? 'max-h-none ' : 'max-h-32'}`} dangerouslySetInnerHTML={{ __html: `<p class="${isExpanded ? '' : 'line-clamp-1'}">${isExpanded ? full : short} </p>` }} >


            </div>
            <button onClick={() => setIsExpanded(!isExpanded)} >{isExpanded ? 'show less' : '...'}</button>
          </div>

          <div className='comments relative'>
            <h2 className='text-2xl font-bold'>Comments</h2>
            {<button className='bg-orange-400' onClick={()=>setShowComments(!showComments)}>{showComments?'Hide Comments':'Show Comments'}</button>}
            {showComments && <div className={` `}>
              
              {comments.map(comment => <Comment info={comment} />)}
            </div>}
            



          </div>

        </div>
        <div className='max-w-100'>
          <div className='flex flex-col gap-y-3 ' >
            {popularVideos.map(vid => <RecomendedCard info={vid} />)}
            {/* <RecomendedCard info={popularVideos[0]} /> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch