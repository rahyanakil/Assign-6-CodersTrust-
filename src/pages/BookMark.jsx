import { useParams } from 'react-router-dom';
import data from '../data/data.json';

const Bookmark = () => {
  const { id } = useParams();
  const blog = data.find((b) => b.id === parseInt(id));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="mt-4" />
    </div>
  );
};

export default Bookmark;