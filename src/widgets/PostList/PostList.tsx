import { FC } from "react";
import { Post } from "../../types/api";
import { useGetPostsQuery } from "../../shared/api/api";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";

const PostListDefault: FC<{posts: Post[]}> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export const PostListWithLoading = withLoading(PostListDefault);

export const PostList: FC = () => {
  const { data: posts, isLoading, isError, refetch } = useGetPostsQuery();

  const handleRetry = () => {
    refetch();
  };

    return (
        <PostListWithLoading 
          posts={posts || []} 
          isLoading={isLoading} 
          isError={isError} 
          onRetry={handleRetry}
        />
    );
}
