import React from 'react'
import { Link } from 'react-router'

const Logo:React.FC = () => {
  return (
    <div className="text-xl font-bold tracking-tight">
          <Link 
            to="/" 
            className=" hover:text-blue-300 dark:text-gray-100 dark:hover:text-blue-400 transition-colors duration-200"
          >
            BatuhanKanra
          </Link>
        </div>
  )
}

export default Logo
