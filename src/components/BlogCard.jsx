import { Link } from 'react-router-dom';
import React from 'react';

export default function BlogCard({ blog, isBookmarked, toggleBookmark }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-4">
      <figure className="w-1/3">
        <img src={blog.image} alt="Blog cover" className="h-full object-cover" />
      </figure>
      <div className="card-body w-2/3">
        <h2 className="card-title">{blog.title}</h2>
        <p className="text-sm">By {blog.author}</p>
        <div className="card-actions justify-end">
          <button 
            className="btn btn-sm" 
            onClick={() => toggleBookmark(blog)}
          >
            {isBookmarked ? '❤️ Bookmarked' : '🔖 Bookmark'}
          </button>
          <Link to={`/blog/${blog.id}`} className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}