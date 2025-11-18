import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars, faSearch, faPlus, faBell, faMicrophone, faUser } from "@fortawesome/free-solid-svg-icons"
import FontIcon from './FontIcon'

const Header = () => {
  return (
    <div className='grid  grid-cols-12 py-2 px-2'>
      <div className='flex items-center md:space-x-4 col-span-4 sm:col-span-4 md:col-span-3'>
        <FontAwesomeIcon icon={faBars} className='text-2xl'/>
        <div>
          <FontAwesomeIcon icon={faYoutube} className='text-red-500 text-2xl' />
          <span className='text-2xl tracking-tighter font-semibold'>YouTube</span>
        </div>
        
      </div>

      <div className='flex px-0 col-span-4 md:col-span-6 md:px-6 sm:px-2 sm:col-span-4 justify-center items-center'>
        <input className='outline-1 rounded-l-4xl w-full px-4 py-1.5' type="text" />
       
        <FontAwesomeIcon icon={faSearch} className='rounded-r-full border-1 text-xl px-3 py-2 mr-3 hover:bg-slate-200'/>
        <FontIcon icon={faMicrophone} className={' text-2xl'}  />
      </div>

      <div className='flex gap-4 justify-end items-center sm:col-span-4   md:col-span-3 col-span-4'>
        <FontIcon icon={faPlus} children={'create'}/>
        <FontIcon icon={faBell} className={' text-xl'} />
        <FontIcon className=" rounded-full text-xl" icon={faUser}/>
      </div>
    </div>
  )
}

export default Header