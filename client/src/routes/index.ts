import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout";
import Home from "../pages/Home";
import AdminLayout from "../admin/Layout";
import Login from "../admin/auth/login";
import AdminHome from "../admin/page/home";
import Blog from "../admin/page/blog";
import BlogDetail from "../admin/page/blog/blogDetail";
import Contacts from "../admin/page/contacts";

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
            },
            {
                path:"blog",
                Component:Blog
            },
            {

            },
            {
                path:"blog/:slug",
                Component:BlogDetail

            },
            {
                path:"contacts",
                Component:Contacts
    
            }
        ]
    

    }
])
export default router