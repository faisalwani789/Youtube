import {configureStore} from '@reduxjs/toolkit'
import popularVideoReducer from "../Slices/PopularVideoSlice"
import settingsReducer from '../Slices/AppSettings'
import VideoReducer from '../Slices/VideoSlice'
import CacheReducer from "../Slices/SearchCache"
const store=configureStore({
    reducer:{
        popular:popularVideoReducer,
        settings:settingsReducer,
        video:VideoReducer,
        cache:CacheReducer
    }
})
export default store