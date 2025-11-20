import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import {Provider} from "react-redux"
import store from './Store/AppStore.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
  </Provider>,
)
