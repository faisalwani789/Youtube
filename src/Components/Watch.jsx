import { useSearchParams } from 'react-router-dom'
import YoutubePlayer from './YoutubePlayer'
import { useEffect } from 'react'
import { resetAbsSidebar, setSideBar } from '../Slices/AppSettings'
import { useDispatch } from 'react-redux'
import Header from './Header'
import SideBar from './SideBar'
import RecomendedCard from './RecommendedCard'
import { useSelector } from 'react-redux'
import useGetVideoDetail from '../hooks/useGetVideoDetail'
const Watch = () => {
  const [searchParams] = useSearchParams()
  const dispach = useDispatch()
  useGetVideoDetail(searchParams.get('v'))
  const popularVideos = useSelector(store => store?.popular)
  const {videoInfo}=useSelector(store=>store.video)
  // console.log(popularVideos)
  const query = searchParams.get('v')
  // console.log(query)
  
  useEffect(() => {
    dispach(setSideBar(false))
    // dispach(setAbsSidebar(true))
    return () => {
      dispach(setSideBar(true))
      dispach(resetAbsSidebar())
    }
  }, [])
  return (
    <div className=''>
      <Header />
      <SideBar />
      <div className="px-15 pt-10 flex gap-x-6 self-start ">
        <div className='shrink-0'>
          <div className='w-220 aspect-video h-auto rounded-xl overflow-hidden '>
            <YoutubePlayer videoId={query} />
           

          </div>
           <p className=' text-black text-2xl w-220'>{videoInfo?.snippet?.title}</p>
        </div>
        <div className='flex flex-col gap-y-3' >
          {popularVideos.map(vid => <RecomendedCard info={vid} />)}
          {/* <RecomendedCard info={popularVideos[0]} /> */}

        </div>
      </div>
    </div>
  )
}

export default Watch