import { Link } from "react-router";
import type { Blog } from "../../../types";

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Kapak resmi */}
      <img
        src={`http://localhost:3000/api${blog.cover_image}`}
        alt={blog.title}
        className=" h-48 object-cover"
      />

      {/* İçerik */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {blog.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          {new Date(blog.created_at).toLocaleDateString("tr-TR")}
        </p>
        <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
          {blog.content}
        </p>

        {/* Devamını oku */}
        <Link
          to={`/admin/blog/${blog.id}`}
          className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Devamını Oku →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
