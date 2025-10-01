import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout";
import Home from "../pages/Home";
import AdminLayout from "../admin/Layout";
import Login from "../admin/auth/login";
import AdminHome from "../admin/page/home";


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
    },
    {
        path:"/admin",
        Component:AdminLayout,
        children:[
            {
                index:true,
                Component:AdminHome
            },
            {
                path:"login",
                Component:Login
            }
        ]
    

    }
])
export default router