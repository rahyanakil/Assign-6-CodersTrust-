import { Link } from "react-router-dom";

const BookmarkList = ({ bookmarks }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bookmarked Posts</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BookmarkList;