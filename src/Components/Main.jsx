import React, { useState } from 'react'
import TopButton from './TopButton'
import { ButtonData } from '../utils/Constants'
const Main = () => {
 
  const[isActive ,setIsActive]=useState('All')
  const handleClick=(tab)=>{
    setIsActive(tab)
  }
  return (
    <div>
      <div className='flex flex-nowrap gap-3 overflow-x-scroll hide-Scroll '>
      {ButtonData.map(button=><TopButton key={button.text} text={button.text} onClick={()=>handleClick(button.text)} isActive={isActive}/>)}
     </div>
      
      </div>
  )
}

export default Main