import React, { useState } from "react";
import Button from "../../../components/Button";
import { useAppDispatch } from "../../../store/hook";
import { blogAdd } from "../../../store/features/blog/add";



const BlogForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    dispatch(blogAdd(formData))

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

export default BlogForm;
