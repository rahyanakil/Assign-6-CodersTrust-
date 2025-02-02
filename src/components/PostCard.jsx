import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const PostCard = ({ post, onBookmark }) => {
  const { id, title, isBookmarked } = post;

  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex justify-between items-center mt-2">
        <Link to={`/post/${id}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
        <button onClick={() => onBookmark(id)} className="text-yellow-500">
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};

export default PostCard;