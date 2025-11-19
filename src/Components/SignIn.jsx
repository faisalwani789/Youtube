import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SignIn = ({icon}) => {
  return (
    <button className='text-blue-500 hover:bg-blue-100 px-2 py-1 hover:outline-0  flex gap-2 items-center outline-1 outline-black  rounded-4xl'>
            <span className='border-2 border-blue-500 rounded-4xl  text-blue-500 '>
               <FontAwesomeIcon icon={icon} className='text-lg'  />
            </span>
            
             signIn
          </button>
  )
}

export default SignIn