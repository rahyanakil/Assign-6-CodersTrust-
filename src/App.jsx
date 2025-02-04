import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import blogsData from './data/data.json';
import BlogCard from './components/BlogCard';
import Bookmarks from './components/Bookmarks';
import Header from './components/Header';

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (blog) => {
    setBookmarks(prev => prev.some(b => b.id === blog.id)
      ? prev.filter(b => b.id !== blog.id)
      : [...prev, blog]
    );
  };


// Update the return statement in App component:
return (
  <div className="min-h-screen bg-base-100">
    {/* <Header bookmarksCount={bookmarks.length} /> */}
    <div className="p-8">
      <div className="flex gap-8">
      <div className="w-2/3">
          {blogsData.map(blog => (
            <BlogCard 
              key={blog.id}
              blog={blog}
              isBookmarked={bookmarks.some(b => b.id === blog.id)}
              toggleBookmark={toggleBookmark}
            />
          ))}
        </div>
        <div className="w-1/3">
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </div>
     
    </div>
  </div>
)};