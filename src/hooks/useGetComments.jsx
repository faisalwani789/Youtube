import React, { useEffect, useState } from 'react'
import { Youtube_comments } from '../utils/Constants'

const useGetComments = (id) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`${Youtube_comments}${id}&key=${import.meta.env.VITE_YOUTUBE_API}`)
            const comments = await res.json()
            setComments(comments.items)
            
        }
        getComments()
    }, [id])

    return{comments}
}

export default useGetComments