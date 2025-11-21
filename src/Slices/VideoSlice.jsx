import { createSlice } from "@reduxjs/toolkit";
const VideoSlice=createSlice({
    name:'video',
    initialState:{
        videoInfo:null,
    },
    reducers:{
        addVideo:(state,action)=>{
            state.videoInfo=action.payload
        },
     
    }
})
export default VideoSlice.reducer
export const {addVideo} =VideoSlice.actions