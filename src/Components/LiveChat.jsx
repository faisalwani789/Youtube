import React, { useEffect, useRef, useState } from 'react'
import { addMessage } from '../Slices/LiveChat'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomMessage } from '../helpers/NamePicker'
const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState(null)
  const { messages } = useSelector(store => store.liveChat)
  const chatBox=useRef(null)
  const dispatch = useDispatch()
  useEffect(()=>{
    const container=chatBox.current
    if(!container)return
    container.scrollTo({top:container.scrollHeight,behaviour:'smooth'})
     
   
    
  },[messages])
  useEffect(()=>{
    const pooling=()=>{
      //pooling
      dispatch(addMessage(getRandomMessage()))
    }
    const interval=setInterval(pooling,5000)
    return ()=>clearInterval(interval)
  })
  return (
    <div className='rounded-lg h-100  max-w-100'>
      <div ref={chatBox}  className='rounded-lg h-100  bg-gray-100 overflow-y-scroll'>
        {messages.map(m=><div className='px-2 py-3 mb-2 bg-gray-300 '>{m}</div>)}
        <div />
      </div>
      <form className="py-3 w-full" onSubmit={(e) =>  e.preventDefault() }>
        <input type='text' placeholder='Comment' value={chatMessage} className='px-2 py-2 w-[80%] mr-3 bg-gray-200' onChange={(e) => setChatMessage(e.target.value)}></input>
        <button className='bg-red-200 px-2 py-2 rounded-2xl' onClick={()=>dispatch(addMessage(chatMessage))}>Send</button>
      </form>
      
    </div>
  )
}

export default LiveChat