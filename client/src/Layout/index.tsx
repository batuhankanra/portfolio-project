import React from 'react'
import { Outlet } from 'react-router'

const MainLayout:React.FC = () => {
  return (
    <div>
      MainLayout
      <Outlet />
    </div>
  )
}

export default MainLayout
