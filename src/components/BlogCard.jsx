import { useState } from 'react';

const BlogCard = ({ blog, onBookmark }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark(blog, !isBookmarked);
  };

  return (
    <div className=" max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover md:w-48 " />
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