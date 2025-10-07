import { PostLengthFilter } from "@/types/api";
import { useGetPostsQuery } from "@/shared/api/api";
import { useState, useCallback, useMemo } from "react";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";

export const usePosts = () => {
    const [filter, setFilter] = useState<PostLengthFilter>("все");
    
    const { data: posts, isLoading, isError, refetch } = useGetPostsQuery();
    
    const handleRetry = useCallback(() => {
      refetch();
    }, [refetch]);
    
    const filteredPosts = useMemo(() => {
      return filterByLength(posts  || [], filter);
    }, [posts, filter]);
    
    const handleFilterChange = useCallback((newFilter: PostLengthFilter) => {
      setFilter(newFilter);
    }, []);

    return {
      posts: filteredPosts,
      isLoading,
      isError,
      handleRetry,
      handleFilterChange,
      filter,
    }
}  
