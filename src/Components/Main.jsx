import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Main = () => {
  const className=useOutletContext()
  console.log(className)
  return (
    <div className={`${className}`}>Main</div>
  )
}

export default Main