import React, { useState } from "react";
import Button from "../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { blogUpdate } from "../../../store/features/blog/update";



const BlogUpdate: React.FC = () => {
  const {blog}=useAppSelector(state=>state.blogGetOne)
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const dispatch=useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // FormData oluştur
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (coverFile) {
      formData.append("image", coverFile);
    }
    dispatch(blogUpdate({id:blog.id,formData}))

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Başlık */}
      <input
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="p-2 border rounded"
      />

      {/* İçerik */}
      <textarea
        rows={5}
        placeholder="İçerik"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border rounded"
      />

      {/* Kapak Görseli */}
      <input
        type="file"
        accept="image/*"
        className="cursor-pointer"
        onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
      />

      <Button type="submit" variant="primary" size="md" className="w-full">
        Kaydet
      </Button>
    </form>
  );
};

export default BlogUpdate;
