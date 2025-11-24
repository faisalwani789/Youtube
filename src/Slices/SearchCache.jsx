import { createSlice } from "@reduxjs/toolkit";

const cache=createSlice({
    name:'cache',
    initialState:{},
    reducers:{
        addSearchCache:(state,action)=>{
           return {...state,...action.payload} 
        }
    }
})
export const{addSearchCache}=cache.actions
export default cache.reducer