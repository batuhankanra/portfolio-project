import Button from "../../../components/Button"
import { deleteBlog } from "../../../store/features/blog/delete"
import { openModal } from "../../../store/features/modal"
import { useAppDispatch, useAppSelector } from "../../../store/hook"


const DeleteBlog = () => {
    const dispatch=useAppDispatch()
    const {blog} =useAppSelector(state=>state.blogGetOne)
  return (
    <div className='flex items-center justify-center gap-x-2 py-4  w-full'>
      <Button className="" onClick={()=>dispatch(deleteBlog(Number(blog.id)))}>Yes</Button>
      <Button variant="danger" onClick={()=>dispatch(openModal({isOpen:false,title:"",content:""}))}>No</Button>
    </div>
  )
}

export default DeleteBlog
