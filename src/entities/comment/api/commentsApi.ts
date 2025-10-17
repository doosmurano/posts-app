import { Comment } from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://jsonplaceholder.typicode.com" 
    }),

    tagTypes: ["Comment"],

    endpoints: (builder) => ({
        getCommentsByPostId: builder.query<Comment[], number>({
            query: (postId) => `posts/${postId}/comments`,
            providesTags: ( result, _, postId) =>
               result
            ?[
                ...result.map(({ id }) => ({ type: "Comment" as const, id })),
                { type: "Comment", id: postId },
            ]
            : [{ type: "Comment", id: postId }],
        }),
    }),
})

export const { 
    useGetCommentsByPostIdQuery 
} = commentsApi;
