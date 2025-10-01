import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'
import { useAppDispatch } from '../../store/hook'
import { meApi } from '../../store/features/auth/login'




const AdminLayout:React.FC = () => {
  const theme=localStorage.getItem("theme")
  const dispatch=useAppDispatch()
  const root = window.document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "light") {
    root.classList.remove("dark");
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
  useEffect(()=>{
    dispatch(meApi())
  },[dispatch])
  
  return (
    <div className=' '>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AdminLayout
