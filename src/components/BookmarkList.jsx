const BookmarkList = ({ bookmarks }) => {
    return (
      <div className="w-full md:w-1/4 p-4 border-t md:border-t-0 md:border-l">
        <h2 className="text-xl font-semibold">Bookmarked Blogs: ({bookmarks.length})</h2>
        <ul>
          {bookmarks.map((blog) => (
            <li key={blog.id} className="mt-2">
              <a href={`/bookmark/${blog.id}`} className="text-blue-500 hover:text-blue-700">
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookmarkList;