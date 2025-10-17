import { Post } from "@/types/api";
import { Link } from "react-router-dom";
import styles from "./PostContent.module.css";

interface PostContentProps {
    post: Post
}

export const PostContent = ({ post }: PostContentProps) => {

  return (
    <article className={styles.postContent}>
      <h2 className={styles.title}>
        <Link to={`/posts/${post.id}`} className={styles.titleLink}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
      <footer className={styles.footer}>
        <span><Link to={`/users/${post.userId}/posts`}>Author ID: {post.userId}</Link></span>
        <span>Post ID: {post.id}</span>
      </footer>
    </article>
  );
}
