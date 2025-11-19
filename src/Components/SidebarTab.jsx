import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const SidebarTab = ({isActive,icon,onClick,tabName}) => {
    return (
        <li className={` inline-block rounded-lg px-2 py-2 w-full hover:bg-slate-100 ${isActive===tabName?'bg-slate-100':''}`} onClick={onClick}>
            <Link to={"/"} className='space-x-4'><FontAwesomeIcon icon={icon} className='text-xl'/><span className='hidden lg:inline font-normal text-sm'>{tabName}</span></Link>
        </li>
    )
}

export default SidebarTab