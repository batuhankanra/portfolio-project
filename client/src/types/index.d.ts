import type { ButtonHTMLAttributes, ReactNode } from "react";

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
interface ModalState{
  isOpen:boolean
  title :string | null
  content:ReactNode | null
}
interface User{
  name:string
  email :string
}
interface AuthState{
  user :User | null
  isAuthticated:boolean
  loading:boolean
  error:string | null
}
interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image: string;
  created_at: string;
  updated_at: string;
}
interface BlogState{
  blog:Blog[]
  loading:boolean
  error:string | null
}
interface blogAddState{
  status:"Idle" | "Loading" | "Fail" | "Success"
  error:string
}
interface BlogOneState{
  blog:Blog
  loading:boolean
  error:string | null
}
