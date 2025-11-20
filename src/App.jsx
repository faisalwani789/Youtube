import React, { useEffect } from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAbsSidebar } from './Slices/AppSettings'
const App = () => {
  // const dispatch=useDispatch()
  //  useEffect(()=>{
  //     dispatch(setAbsSidebar(false))
  //  },[])
  return (
 
    <div className=''>
        <Header/>
        <div className='flex flex-nowrap'>
          <SideBar/>
          <Outlet/>
        </div>
        
    </div>
  )
}

export default App