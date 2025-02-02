import { useState } from "react";
import PostCard from "../components/PostCard";
import postsData from "../data/posts.json";

const Home = () => {
  const [posts, setPosts] = useState(postsData);

  const handleBookmark = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, isBookmarked: !post.isBookmarked } : post
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onBookmark={handleBookmark} />
      ))}
    </div>
  );
};

export default Home;