import { Post, PostLengthFilter } from "@/types/api";

export const filterByLength = (posts: Post[], filter: PostLengthFilter): Post[] => {
  if (!posts) return [];

    switch (filter) {
        case PostLengthFilter.ALL: 
            return posts;
        case PostLengthFilter.LONGEST_FIRST:
            return [...posts].sort((a, b) => b.title.length - a.title.length);
        case PostLengthFilter.SHORTEST_FIRST:
            return [...posts].sort((a, b) => a.title.length - b.title.length);
        default:
            return posts;
    };
}
