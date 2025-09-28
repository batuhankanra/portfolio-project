import type { ButtonHTMLAttributes } from "react";

type ButtonVariant="primary" | "secondary" | "danger" | "outline"
type Size = "xs" |"sm" | "md" | "lg" | "xl"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?:ButtonVariant
    size?:Size
    isLoading?:boolean
}

type Theme = "dark" | "light" | "system";

interface ThemeState {
  theme: Theme;
}