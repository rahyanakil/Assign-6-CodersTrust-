import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import BookmarkList from '../components/BookmarkList';
import data from '../data/data.json';

const Home = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleBookmark = (blog, isBookmarked) => {
    let updatedBookmarks;
    if (isBookmarked) {
      updatedBookmarks = [...bookmarks, blog];
    } else {
      updatedBookmarks = bookmarks.filter((b) => b.id !== blog.id);
    }
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
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