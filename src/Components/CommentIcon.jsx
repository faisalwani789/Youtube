import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CommentIcon = ({icon}) => {
    return(
        <div className='hover:bg-gray-200 p-2 rounded-4xl'>
                <FontAwesomeIcon icon={icon} className={`icon-Primary font-semibold text-lg`}/>
        </div>
      
     
    )
}

export default CommentIcon