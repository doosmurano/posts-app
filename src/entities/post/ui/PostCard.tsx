import { FC } from "react";
import { Post } from "@/types/api";
import { PostContent } from "./PostContent";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";

interface PostCardProps {
    post: Post
}

export const PostCard: FC<PostCardProps> = ({ post }) => {

  return (
      <article className="post-card">
        <PostContent post={post} />
        <CommentList
         postId={post.id} />
      </article>
  );
}
