import {configureStore} from '@reduxjs/toolkit'
import popularVideoReducer from "../Slices/PopularVideoSlice"
import settingsReducer from '../Slices/AppSettings'
import VideoReducer from '../Slices/VideoSlice'
import CacheReducer from "../Slices/SearchCache"
import LiveChatReducer from "../Slices/LiveChat"
const store=configureStore({
    reducer:{
        popular:popularVideoReducer,
        settings:settingsReducer,
        video:VideoReducer,
        cache:CacheReducer,
        liveChat:LiveChatReducer
    }
})
export default store