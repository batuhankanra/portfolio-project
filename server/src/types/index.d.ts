export interface BlogProps {
  id: number
  user_id: number
  title: string
  slug: string
  content: string
  cover_image?: string | null
  created_at: Date
  updated_at: Date
}
export interface UserProps{
  id:number
  name:string
  email:string
  passport_hash:string
  role:string
  created_at: Date
  updated_at: Date
}
