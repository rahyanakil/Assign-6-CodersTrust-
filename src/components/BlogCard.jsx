import { useState } from 'react';

const BlogCard = ({ blog, onBookmark }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark(blog, !isBookmarked);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover md:w-48"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
          </div>

          {/* Bookmark Button */}
          <div className="mt-4 md:mt-0">
            <button
              onClick={handleBookmark}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isBookmarked ? 'Unbookmark' : 'Bookmark'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;