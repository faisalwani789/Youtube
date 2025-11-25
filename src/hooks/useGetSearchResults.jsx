
import React, { useEffect, useState } from 'react'
import { Youtube_Search } from '../utils/Constants'


const useGetSearchResults = (searchQuery) => {
 const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const getSearchResults = async () => {
            const res = await fetch(`${Youtube_Search}${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_API}`)
            const data = await res.json()
            setSearchResults(data.items)
            console.log(data)
            
        }
        getSearchResults()
    }, [searchQuery])

    return{searchResults}
}


export default useGetSearchResults
    
