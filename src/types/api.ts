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

export type PostLengthFilter = "all" | "short" | "medium" | "long";

export interface LoadingState {
    isLoading: boolean;
    isError: boolean;
    errorMessage?: string;
}
