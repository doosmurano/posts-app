import { Post, Comment } from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://jsonplaceholder.typicode.com" 
    }),

    tagTypes: ["Post", "Comment"],

    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "posts",
            providesTags: ["Post"],
        }),

        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: ( _, __, postId) => [
                { type: "Post", id: postId },
            ],
        }),

        getCommentsByPostId: builder.query<Comment[], number>({
            query: (postId) => `posts/${postId}/comments`,
            providesTags: ( _, __, postId) => [
                { type: "Comment", id: postId },
            ],
        }),
    }),
})

export const { useGetPostsQuery, useGetPostByIdQuery, useGetCommentsByPostIdQuery } = postsApi;
