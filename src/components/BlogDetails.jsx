import { useParams, Link } from 'react-router-dom';
import React from 'react';
import blogsData from '../data/data.json';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <img src={blog.image} alt="Blog cover" className="w-full h-64 object-cover mb-4" />
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-lg">By {blog.author}</p>
        <div className="mt-8">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}