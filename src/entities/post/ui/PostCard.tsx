import { Post } from "@/types/api";
import styles from "./PostCard.module.css";
import { PostContent } from "./PostContent";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";

interface PostCardProps {
    post: Post
}

export const PostCard = ({ post }: PostCardProps) => {

  return (
      <article className={styles.postCard}>
        <div className={styles.postContent}>
          <PostContent post={post} />
        </div>
        <div className={styles.commentsButton}>
          <CommentList postId={post.id} />
        </div>
      </article>
  );
}
