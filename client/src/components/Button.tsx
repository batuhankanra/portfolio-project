import React from 'react'
import clsx from 'clsx'
import type { ButtonProps, ButtonVariant, Size } from '../types'

const Button:React.FC<ButtonProps> = ({variant="primary",size="md",isLoading=false,children,className,...props}) => {
    const baseStyle="rounded-md  cursor-pointer font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    const variantStyles:Record<ButtonVariant ,string>={
        primary:"bg-primary text-white hover:bg-primary/70 105  transition-all duration-200",
        secondary:"bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-200",
        danger:"bg-red-600 text-white hover:bg-red-700 transition-all duration-200",
        outline:"  dark:text-zinc-300 text-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
    }
    const sizeStyles:Record<Size,string>={
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-2.5 text-lg",
        xl: "px-6 py-3 text-xl",

    }
  return (
    <button disabled={isLoading || props.disabled} {...props}  className={clsx(baseStyle,variantStyles[variant],sizeStyles[size])}>
      {isLoading ? "Loading" : children}
    </button>
  )
}

export default Button
