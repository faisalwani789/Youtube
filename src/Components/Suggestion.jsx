import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Suggestion = ({info}) => {
  return (
   <li className='py-2 px-2 hover:bg-gray-100'><FontAwesomeIcon icon={faMagnifyingGlass}/> {info}</li>
  )
}

export default Suggestion