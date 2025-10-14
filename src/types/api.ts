export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export enum PostLengthFilter {
    ALL = "все",
    LONGEST_FIRST = "сначала длинные",
    SHORTEST_FIRST = "сначала короткие",
}

export interface LoadingState {
    isLoading: boolean;
    isError: boolean;
    errorMessage?: string;
}
