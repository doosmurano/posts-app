import { Todo } from "@/entities/todo/model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://jsonplaceholder.typicode.com" 
    }),

    tagTypes: ["Todo"],

    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => "todos",
            providesTags: (result) =>
                result
            ?[
                ...result.map(({ id }) => ({ type: "Todo" as const, id })),
                { type: "Todo", id: "LIST"},
            ]
            : [{ type: "Todo", id: "LIST" }],
        }),

        getTodoById: builder.query<Todo, number>({
            query: (id) => `todos/${id}`,
            providesTags: (_, __, id) => [{type: "Todo", id}],
        }),
        
        getTodosByUserId: builder.query<Todo[], number>({
            query: (userId) => `todos?userId=${userId}`,
            providesTags: (result, _, userId) =>
                result
            ?[
                ...result.map(({ id }) => ({ type: "Todo" as const, id })),
                { type: "Todo", id: `USER_${userId}` },
            ]
            : [ { type: "Todo", id: `USER_${userId}` }],
        }),
    }),
})

export const { 
    useGetTodosQuery, 
    useGetTodoByIdQuery, 
    useGetTodosByUserIdQuery 
} = todosApi;
