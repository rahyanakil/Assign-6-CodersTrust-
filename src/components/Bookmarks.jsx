import { Link } from 'react-router-dom';
import React from 'react';

export default function Bookmarks({ bookmarks }) {
  return (
    <div className="bg-base-200 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Bookmarked Blogs ({bookmarks.length})</h2>
      <div className="space-y-2">
        {bookmarks.map(blog => (
          <Link 
            key={blog.id} 
            to={`/blog/${blog.id}`}
            className="block p-2 bg-base-100 rounded hover:bg-base-300 transition"
          >
            {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
}