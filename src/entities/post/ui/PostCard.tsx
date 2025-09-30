import { FC } from "react";

interface Post {
    userId: number
    id: number
    title: string
    body: string 
}

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
        </article>
    )
}
