import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';

// Inside BlogCard.jsx
const BlogCard = ({ blog, onBookmark }) => {
  // Check if the current blog is already bookmarked
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setIsBookmarked(storedBookmarks.some((b) => b.id === blog.id));
  }, [blog.id]);

  const handleClick = () => {
    // Toggle the bookmark state
    onBookmark(blog, !isBookmarked);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      {/* Blog content */}
      <button onClick={handleClick}>
        {isBookmarked ? "Remove Bookmark" : "Bookmark"}
      </button>
    </div>
  );
};

export default BlogCard;