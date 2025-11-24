import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Suggestion = ({info,onClick}) => {
  // console.log(onClick)
  return (
   <li className='py-2 px-2 hover:bg-gray-100' onClick={onClick} ><FontAwesomeIcon icon={faMagnifyingGlass} /> {info}</li>
  )
}

export default Suggestion