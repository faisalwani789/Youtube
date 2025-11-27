import React, { useEffect, useState } from 'react'
import { Youtube_comments } from '../utils/Constants'

const useGetComments = (id) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`https://netmaxgptbkd-1.onrender.com/api/youtube/comments?videoId=${id}`)
            const comments = await res.json()
        
            setComments(comments.items)
         
            
        }
        getComments()
    }, [id])

    return{comments}
}

export default useGetComments