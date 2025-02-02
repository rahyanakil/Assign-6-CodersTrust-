const BookmarkList = ({ bookmarks }) => {
    return (
      <div className="w-1/4 p-4 border-l">
        <h2 className="text-xl font-semibold">Bookmarked Blogs: ({bookmarks.length})</h2>
        <ul>
          {bookmarks.map((blog) => (
            <li key={blog.id} className="mt-2">
              <a href={`/bookmark/${blog.id}`} className="text-blue-500">{blog.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookmarkList;