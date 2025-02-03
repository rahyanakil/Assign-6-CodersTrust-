import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import BookmarkList from '../components/BookmarkList';
import data from '../data/data.json';
import React from 'react';

const Home = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleBookmark = (blog, isBookmarked) => {
    let updatedBookmarks;
    
    if (isBookmarked) {
      // Check if the blog is already bookmarked
      const isAlreadyBookmarked = bookmarks.some((b) => b.id === blog.id);
      
      // Only add if NOT already bookmarked
      updatedBookmarks = isAlreadyBookmarked 
        ? [...bookmarks] 
        : [...bookmarks, blog];
    } else {
      // Remove the blog from bookmarks
      updatedBookmarks = bookmarks.filter((b) => b.id !== blog.id);
    }
  
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="flex">
      <div className="w-3/4">
        {data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onBookmark={handleBookmark} />
        ))}
      </div>
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
};

export default Home;