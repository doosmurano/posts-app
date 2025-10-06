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

export type PostLengthFilter = "все" | "сначала длинные" | "сначала короткие";

export interface LoadingState {
    isLoading: boolean;
    isError: boolean;
    errorMessage?: string;
}
