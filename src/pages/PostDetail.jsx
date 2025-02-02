import { useParams } from "react-router-dom";
import postsData from "../data/posts.json";

const PostDetail = () => {
  const { id } = useParams();
  const post = postsData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default PostDetail;