import { Post } from "@/types/api";

interface PostContentProps {
    post: Post
}

export const PostContent = ({ post }: PostContentProps) => {

  return (
      <article className="post-card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <footer>
          <span>Author ID: {post.userId}</span>
          <span>Post ID: {post.id}</span>
        </footer>
      </article>
  );
}
