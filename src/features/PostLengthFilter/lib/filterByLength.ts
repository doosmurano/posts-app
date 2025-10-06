import { Post, PostLengthFilter } from "../../../types/api";

export const filterByLength = (posts: Post[], filter: PostLengthFilter): Post[] => {
  if (!posts) return [];

    switch (filter) {
        case "все": 
            return posts;
        case "сначала длинные":
            return [...posts].sort((a, b) => b.title.length - a.title.length);
        case "сначала короткие":
            return [...posts].sort((a, b) => a.title.length - b.title.length);
        default:
            return posts;
    };
}
