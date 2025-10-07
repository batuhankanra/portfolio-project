import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { blogApi } from '../../../store/features/blog'
import BlogCard from './blogcard'
import Button from '../../../components/Button'
import { openModal } from '../../../store/features/modal'
import BlogAdd from './blogadd'

const Blog = () => {
    const dispatch=useAppDispatch()
    const {blog,error,loading}=useAppSelector(state=>state.blog)

    React.useEffect(()=>{
        dispatch(blogApi())
    },[])
    if(loading) return <p>Yükleniyor</p>

    if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="space-y-6 container mx-auto py-4">
      {/* Başlık + Ekle Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Blog Yönetimi
        </h1>
        <Button
          size="sm"
          variant="primary"
          onClick={() => dispatch(openModal({title:"Add New Blog",content:<BlogAdd />,isOpen:true}))}
        >
          + Add New Blog
        </Button>
      </div>

      {/* Blog Grid */}
      {blog.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Henüz hiç blog eklenmemiş.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
      
    </div>
  )
}

export default Blog
