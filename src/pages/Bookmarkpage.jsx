import { useState, useEffect } from "react";
import BookmarkList from "../components/BookmarkList";
import postsData from "../data/posts.json";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const bookmarkedPosts = postsData.filter((post) => post.isBookmarked);
    setBookmarks(bookmarkedPosts);
  }, [postsData]);

  return (
    <div>
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
};

export default Bookmark;