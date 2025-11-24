import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars, faSearch, faPlus, faBell, faMicrophone, faUser } from "@fortawesome/free-solid-svg-icons"
import FontIcon from './FontIcon'
import SignIn from './SignIn'
import { useDispatch } from 'react-redux'
import { setAbsSidebar } from '../Slices/AppSettings'
import useGetSuggestions from '../hooks/useGetSuggestions'
import Suggestion from './Suggestion'
import { Youtube_Search } from '../utils/Constants'
import { addVideos } from '../Slices/PopularVideoSlice'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const { suggestions } = useGetSuggestions(searchQuery)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const dispatch = useDispatch()
  const handleClick2=()=>{
    console.log('clicked')
  }
  const handleSearch = async () => {
     console.log('clicked')
    const res = await fetch(`${Youtube_Search}${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_API}`)
    const data = await res.json()
    console.log(data)
    dispatch(addVideos(data.items))
    // setSearchResults(data.items)

  }
  const toggleSidebar = () => {
    if (window.location.pathname == '/watch') {
      dispatch(setAbsSidebar())

    }
    else {
      console.log('show icons icons')
    }
  }

  return (
    <div className='sticky top-0 w-full bg-white grid  grid-cols-12 py-2 sm:py-4 px-2'>
      <div className='flex items-center md:space-x-4 col-span-3 sm:col-span-4 md:col-span-3'>
        <FontAwesomeIcon icon={faBars} className='text-2xl' onClick={toggleSidebar} />
        <div>
          <FontAwesomeIcon icon={faYoutube} className='text-red-500 text-2xl ' />
          <span className='hidden sm:inline text-2xl tracking-tighter font-semibold'>YouTube</span>
        </div>

      </div>

      <div className='flex px-0 col-span-6 md:col-span-6 md:px-6 sm:px-2 sm:col-span-4  justify-center items-center'>
        <input className=' outline-1 rounded-l-4xl w-full px-4 py-1.5' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => {setShowSuggestions(true);console.log("focus")}} onBlur={() => {setShowSuggestions(false);console.log('blur')}} />

        <FontAwesomeIcon icon={faSearch} className='border-1 rounded-r-full text-xl px-3 py-2 mr-3 hover:bg-slate-200' />
        {showSuggestions && (
          <div className='fixed top-15 shadow-md rounded-lg w-1/2 bg-white '>
            <div onMouseDown={(e)=>e.preventDefault()}>
              {suggestions.map(res => <Suggestion key={res} info={res} onClick={handleSearch} />)}
            </div>
          </div>
        )}

        <FontIcon icon={faMicrophone} className={' text-2xl'} className3={'hidden sm:block'} />
      </div>

      <div className='flex gap-4 justify-end items-center col-span-3 sm:col-span-4   md:col-span-3 '>
        {/* <FontIcon icon={faPlus} children={'create'}/> */}
        <FontIcon icon={faBell} className={' text-xl'} className3={'hidden sm:block'} />
        <SignIn icon={faUser} />
      </div>

    </div>
  )
}

export default Header