import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/header'
import Button from '../components/Button'

const MainLayout:React.FC = () => {
  return (
    <div>
      <Button children="sa" size='sm' />
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
