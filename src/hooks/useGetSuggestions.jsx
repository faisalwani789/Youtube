
import { useState,useEffect } from 'react'
import { AutoSuggest } from '../utils/Constants'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addSearchCache } from '../Slices/SearchCache'
const useGetSuggestions = (searchQuery) => {
     const[suggestions,setSuggestions]=useState([])
     const cache=useSelector(store=>store.cache)
     const dispatch=useDispatch()

      useEffect(()=>{
    const autoSuggestions=async()=>{
        const res= await fetch(`${AutoSuggest}${searchQuery}`)
          const json=await res.json()
          console.log(json)
          if(json.length==0)return
          setSuggestions(json) //update suggestions
          dispatch(addSearchCache({ //update the cache
          [searchQuery]:json
        }))
    }
    const api=setTimeout(()=>{
      if(cache[searchQuery]){
        setSuggestions(cache[searchQuery])
      }
      else{
        autoSuggestions()
       
      }
      },500)
    return()=>clearTimeout(api)
  },[searchQuery])
  return {suggestions}
}

export default useGetSuggestions