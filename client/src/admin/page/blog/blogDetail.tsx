import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { getOneBLog } from "../../../store/features/blog/getOne";
import Button from "../../../components/Button";
import { openModal } from "../../../store/features/modal";
import BlogUpdate from "./blogUpdate";
import DeleteBlog from "./deleteBlog";

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const {blog,error,loading  } = useAppSelector(state=>state.blogGetOne);

  useEffect(() => {
    if (slug) {
      dispatch(getOneBLog(Number(slug)));
    }
  }, [slug, dispatch]);

  if (loading) return <div className="p-6 text-center">Yükleniyor...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!blog.title) return <div className="p-6">Blog bulunamadı.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md flex flex-col gap-y-4 mt-20 my-5">
      <img
        src={`http://localhost:3000/api${blog.cover_image}`}
        alt={blog.title}
        className="rounded-xl mb-6 w-full h-64 object-cover"
      />
      <h1 className="text-3xl font-bold mb-4 dark:text-white">
        {blog.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300">{blog.content}</p>

      <p className="text-sm text-gray-400 mt-6">
        Yayınlanma: {new Date(blog.created_at).toLocaleDateString()}
      </p>
      <Button className="" onClick={()=>dispatch(openModal({title:"update",isOpen:true,content:<BlogUpdate />}))}>Options</Button>
      <Button className="" variant="secondary" onClick={()=>dispatch(openModal({title:"delete",isOpen:true,content:<DeleteBlog />}))}>Delete</Button>
      
    </div>
  );
};

export default BlogDetail;
