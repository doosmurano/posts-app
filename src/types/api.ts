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
