import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const FontIcon = ({icon,className,children,className2}) => {
  console.log(children)
  return (
    <div className='flex items-center  hover:bg-slate-200 bg-slate-100 rounded-4xl p-2'>
      <FontAwesomeIcon icon={icon} className={`icon-Primary font-semibold   ${className} `}/>
        <span className={`${className2}  text-black tracking-tighter`}>{children}</span>
      </div>
  )
}

export default FontIcon