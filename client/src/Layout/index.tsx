import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'




const MainLayout:React.FC = () => {
  const theme=localStorage.getItem("theme")
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
  
  return (
    <div className=' '>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
