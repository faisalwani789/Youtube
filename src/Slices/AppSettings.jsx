import { createSlice } from "@reduxjs/toolkit";

const Settings=createSlice({
    name:'settings',
    initialState:{
        sideBar:true,
        absSidebar:false
    },
    reducers:{
        setSideBar:(state,action)=>{
            state.sideBar=action.payload
        },
        setAbsSidebar:(state)=>{
            state.absSidebar=!state.absSidebar
        }
        ,
        resetAbsSidebar:(state)=>{
            state.absSidebar=false
        }
    }

})
export const {setSideBar,setAbsSidebar,resetAbsSidebar}=Settings.actions
export default Settings.reducer