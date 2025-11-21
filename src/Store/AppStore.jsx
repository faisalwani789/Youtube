import {configureStore} from '@reduxjs/toolkit'
import popularVideoReducer from "../Slices/PopularVideoSlice"
import settingsReducer from '../Slices/AppSettings'
import VideoReducer from '../Slices/VideoSlice'
const store=configureStore({
    reducer:{
        popular:popularVideoReducer,
        settings:settingsReducer,
        video:VideoReducer
    }
})
export default store