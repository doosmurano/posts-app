import { FC, useState } from "react";
import { Post } from "../../types/api";
import { PostLengthFilter } from "../../types/api";
import { useGetPostsQuery } from "../../shared/api/api";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter as PostLengthFilterComponent } from "../../features/PostLengthFilter/ui/PostLengthFilter";

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
const [filter, setFilter] = useState<PostLengthFilter>("все");

  const { data: posts, isLoading, isError, refetch } = useGetPostsQuery();

  const handleRetry = () => {
    refetch();
  };

  const filteredPosts = filterByLength(posts  || [], filter);

    return (
      <>
        <PostLengthFilterComponent
        filter={filter}
        onChange={setFilter}
        />
        
        <PostListWithLoading 
        posts={filteredPosts} 
        isLoading={isLoading} 
        isError={isError} 
        onRetry={handleRetry}
        />
      </>
    );
}
