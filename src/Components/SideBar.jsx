import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse,faBolt,faClockRotateLeft,faUser} from "@fortawesome/free-solid-svg-icons"
import {faSquareYoutube} from "@fortawesome/free-brands-svg-icons"
import SidebarTab from './SidebarTab'

const SideBar = () => {
  const[isActive,setIsActive]=useState('Home')
  const handleClick=(tab)=>{
    setIsActive(tab)
  }
  return (
    <div className='w-62 px-2 '>
        <ul className=''>
          <SidebarTab isActive={isActive}onClick={()=>handleClick('Home')} icon={faHouse} tabName={'Home'}/>
          <SidebarTab isActive={isActive}onClick={()=>handleClick('Shorts')} icon={faBolt} tabName={'Shorts'}/>
          <SidebarTab isActive={isActive}onClick={()=>handleClick('Shorts')} icon={faSquareYoutube} tabName={'Subscriptions'}/>
          <SidebarTab isActive={isActive}onClick={()=>handleClick('Shorts')} icon={faClockRotateLeft} tabName={'History'}/>
          <SidebarTab isActive={isActive}onClick={()=>handleClick('Shorts')} icon={faUser} tabName={'You'}/>
         
           
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>You</li>
            <li>History</li>
            <li>Playlist</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
            <li>Subscriptions</li>
            <li>T series</li>
            <li>Sony Music India</li>
        </ul>
    </div>
  )
}

export default SideBar