import { FC } from "react";
import { Post } from "../../../types/api";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";

interface PostCardProps {
    post: Post
}

export const PostCard: FC<PostCardProps> = ({ post }) => {

  return (
      <article className="post-card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <footer>
          <span>Author ID: {post.userId}</span>
          <span>Post ID: {post.id}</span>
        </footer>
        <CommentList
         postId={post.id} />
      </article>
  );
}
