import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const FontIcon = ({icon,className,children,className2,className3}) => {
  
  return (
    <div className={`flex items-center gap-2  hover:bg-slate-200 bg-slate-100 rounded-4xl px-3 py-2 ${className3}`}>
        <FontAwesomeIcon icon={icon} className={`icon-Primary font-semibold   ${className} `}/>
        <span className={`${className2}  text-black tracking-tighter`}>{children}</span>
      </div>
  )
}

export default FontIcon