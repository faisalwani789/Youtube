import { useState } from 'react'
import { useSelector } from 'react-redux'
import SidebarTab from './SidebarTab'
import SignIn from './SignIn'
import { ExploreData, SidebarData } from '../utils/Constants'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import YoutubeLogo from './YoutubeLogo'
const SideBar = () => {
  const[isActive,setIsActive]=useState('Home')
  const {sideBar,absSidebar}=useSelector(store=>store.settings)
  const handleClick=(tab)=>{
    setIsActive(tab)
  }
  // console.log(sideBar)
  if(!sideBar && !absSidebar){
    return null
  }
  return (
    <div className={`lg:w-60 lg:min-w-60 px-2 overflow-y-scroll  self-start ${absSidebar ? 'absolute z-20 top-0 left-0 bg-white':'sticky top-0'}   `}>
      {absSidebar && <div className='py-5'><YoutubeLogo /></div>   }
        <ul className=''>
          {SidebarData.map(side=><SidebarTab key={side.tabName} icon={side.icon} tabName={side.tabName} onClick={()=>handleClick(side.tabName)} isActive={isActive} />)}
        
        </ul>
        <div className='px-5 py-3 space-y-4 border-t-1 hidden lg:inline-block  border-black/50'>
          <p>Sign in to like videos, comment, and subscribe.</p>
          <SignIn icon={faUser}/>
         
        </div>
        <ul className='border-t-1 border-black/50'>
          {ExploreData.map(exp=><SidebarTab key={exp.tabName} icon={exp.icon} tabName={exp.tabName} onClick={()=>handleClick(exp.tabName)}/> )}
        </ul>
    </div>
  )
}

export default SideBar