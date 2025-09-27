import type { ButtonHTMLAttributes } from "react";

type ButtonVariant="primary" | "secondary" | "danger" | "outline"
type Size = "xs" |"sm" | "md" | "lg" | "xl"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?:ButtonVariant
    size?:Size
    isLoading?:boolean
}

interface ThemeState{
    value:"light" | "dark" | "system"
}