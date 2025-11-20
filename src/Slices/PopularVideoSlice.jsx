import { createSlice } from "@reduxjs/toolkit";
const popularVideoSlice=createSlice({
    name:'popular',
    initialState:[],
    reducers:{
        addVideos:(state,action)=>{
            return action.payload
        }
    }
})
export default popularVideoSlice.reducer
export const {addVideos} =popularVideoSlice.actions