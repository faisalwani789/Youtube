import {configureStore} from '@reduxjs/toolkit'
import popularVideoReducer from "../Slices/PopularVideoSlice"
import settingsReducer from '../Slices/AppSettings'
const store=configureStore({
    reducer:{
        popular:popularVideoReducer,
        settings:settingsReducer
    }
})
export default store