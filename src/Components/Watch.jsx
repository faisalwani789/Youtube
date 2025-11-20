import { useSearchParams } from 'react-router-dom'
import YoutubePlayer from './YoutubePlayer'
import { useEffect } from 'react'
import { resetAbsSidebar, setSideBar } from '../Slices/AppSettings'
import { useDispatch } from 'react-redux'

const Watch = () => {
  const [searchParams]=useSearchParams()
  const dispach=useDispatch()
  const query=searchParams.get('v')
  console.log(query)
  useEffect(()=>{
    dispach(setSideBar(false))
    // dispach(setAbsSidebar(true))
    return ()=>{
      dispach(setSideBar(true))
     dispach(resetAbsSidebar())
    }
  },[])
  return (
    <div className='px-20'>
      <YoutubePlayer videoId={query} />
    </div>
  )
}

export default Watch