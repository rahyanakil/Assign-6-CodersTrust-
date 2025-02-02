import { useState } from 'react';

const BlogCard = ({ blog, onBookmark }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark(blog, !isBookmarked);
  };

  return (
    <div className="flex items-center p-4 border-b">
      <img src={blog.image} alt={blog.title} className="w-16 h-16 rounded-full" />
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
      </div>
      <button onClick={handleBookmark} className="ml-auto">
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default BlogCard;