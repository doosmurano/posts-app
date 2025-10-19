import { Fragment } from "react";
import { Post } from "@/entities/post/model/types";
import { PostCard } from "@/entities/post/ui/PostCard";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { PostLengthFilter as PostLengthFilterComponent } from "@/features/PostLengthFilter/ui/PostLengthFilter";

const PostListDefault = ({ posts }: {posts: Post[]}) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export const PostListWithLoading = withLoading(PostListDefault);

export const PostList = () => {
  const { posts, isLoading, isError, handleRetry, handleFilterChange, filter } = usePosts();

    return (
      <Fragment>
        <PostLengthFilterComponent
        filter={filter}
        onChange={handleFilterChange}
        />
        
        <PostListWithLoading 
        posts={posts} 
        isLoading={isLoading} 
        isError={isError} 
        onRetry={handleRetry}        
        />
      </Fragment>
    );
}
