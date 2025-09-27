import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout";
import Home from "../pages/Home";


const router =createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    }
])
export default router