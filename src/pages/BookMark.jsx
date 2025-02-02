import { useParams } from 'react-router-dom';
import data from '../data/data.json';

const Bookmark = () => {
  const { id } = useParams();
  const blog = data.find((b) => b.id === parseInt(id));

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
        {blog.title}
      </h1>

      {/* Image */}
      <div className="mt-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-lg shadow-md md:max-w-2xl mx-auto"
        />
      </div>

      {/* Additional Content (if any) */}
      <div className="mt-6 text-gray-700">
        <p>
          This is a placeholder for additional content related to the blog post.
          You can add more details, descriptions, or other elements here.
        </p>
      </div>
    </div>
  );
};

export default Bookmark;