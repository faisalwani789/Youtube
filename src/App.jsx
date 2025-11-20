import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import { Outlet } from 'react-router-dom'
const App = () => {
   
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