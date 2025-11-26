import { createSlice } from "@reduxjs/toolkit";
const LiveChat=createSlice({
    name:'liveChat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.push(action.payload)
        }
    }
})
export default  LiveChat.reducer
export const {addMessage}=LiveChat.actions