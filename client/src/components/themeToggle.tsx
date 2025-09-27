import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook'
import Button from './Button'
import { setTheme } from '../store/themes'

const ThemeToggle:React.FC = () => {
    const dispatch =useAppDispatch()
    const theme=useAppSelector(state=>state.theme.value)
    console.log(theme)
  return (
    <Button onClick={()=>dispatch(setTheme({value:"dark"}))}>
      
    </Button>
  )
}

export default ThemeToggle
