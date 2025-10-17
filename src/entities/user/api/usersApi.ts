import { User } from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://jsonplaceholder.typicode.com" 
    }),

    tagTypes: ["User"],

    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "users",
            providesTags: (result) =>
                result
            ?[
                ...result.map(({ id }) => ({ type: "User" as const, id })),
                { type: "User", id: "LIST"},
            ]
            : [{ type: "User", id: "LIST" }],
        }),

        getUserById: builder.query<User, number>({
            query: (id) => `users/${id}`,
            providesTags: (_, __, id) => [{type: "User", id}],
        }),
    }),
})

export const { 
    useGetUsersQuery, 
    useGetUserByIdQuery 
} = usersApi;
