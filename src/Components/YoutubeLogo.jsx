import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useDispatch } from 'react-redux'
import { setAbsSidebar } from '../Slices/AppSettings'
const YoutubeLogo = () => {
    const dispatch=useDispatch()
    const toggleSidebar = () => {
        if (window.location.pathname == '/watch') {
            dispatch(setAbsSidebar())
        }
    }

        return (
            <div className='flex items-center md:space-x-4 col-span-4 sm:col-span-4 md:col-span-3'>
                <FontAwesomeIcon icon={faBars} className='text-2xl' onClick={toggleSidebar} />
                <div>
                    <FontAwesomeIcon icon={faYoutube} className='text-red-500 text-2xl ' />
                    <span className='text-2xl tracking-tighter font-semibold'>YouTube</span>
                </div>

            </div>
        )
    }

    export default YoutubeLogo