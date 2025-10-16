import { Post } from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://jsonplaceholder.typicode.com" 
    }),

    tagTypes: ["Post"],

    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "posts",
            providesTags: (result) =>
                result
            ?[
                ...result.map(({ id }) => ({ type: "Post" as const, id })),
                { type: "Post", id: "LIST"},
            ]
            : [{ type: "Post", id: "LIST" }],
        }),

        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: (_, __, postId) => [
                { type: "Post", id: postId }
            ],
        }),

        getPostsByUserId: builder.query<Post[], number>({
            query: (userId) => `posts?userId=${userId}`,
            providesTags: (result, _, userId) =>
               result
            ?[
                ...result.map(({ id }) => ({ type: "Post" as const, id })),
                { type: "Post", id: userId },
            ]
            : [{ type: "Post", id: `USER_${userId}` }],
        }),  
    }),
})

export const { 
    useGetPostsQuery, 
    useGetPostByIdQuery, 
    useGetPostsByUserIdQuery 
} = postsApi;
