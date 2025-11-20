import {configureStore} from '@reduxjs/toolkit'
import popularVideoReducer from "../Slices/PopularVideoSlice"
const store=configureStore({
    reducer:{
        popular:popularVideoReducer
    }
})
export default store