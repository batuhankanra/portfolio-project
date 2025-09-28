import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/header'

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
    <div className='dark:bg-zinc-700 '>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
