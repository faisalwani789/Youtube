import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Components/Main"
import Watch from "../Components/Watch";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Main/>
            },
            
        ]  
    }
    ,
    {
                path:'/watch',
                element:<Watch/>
            }
])

export default router