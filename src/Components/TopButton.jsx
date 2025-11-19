import React from 'react'

const TopButton = ({text,isActive,onClick}) => {
  return (
    <button className={`shrink-0 rounded-lg cursor-pointer font-medium bg-primary px-4 py-2 ${isActive===text?'bg-black text-white':''}`}  onClick={onClick}>
     {text}
    </button>
  )
}

export default TopButton