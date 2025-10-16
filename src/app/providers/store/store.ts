import { configureStore } from "@reduxjs/toolkit";

import { postsApi } from "@/entities/post/api/postApi";
import { usersApi } from "@/entities/user/api/usersApi";
import { todosApi } from "@/entities/todo/api/todosApi";
import { albumsApi } from "@/entities/album/api/albumsApi";
import { commentsApi } from "@/entities/comment/api/commentsApi";

import { postReducer } from "@/entities/post/model/slice/postSlice";
import { userReducer } from "@/entities/user/model/slice/userSlice";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,

        posts: postReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
           .concat(postsApi.middleware)
           .concat(usersApi.middleware)
           .concat(todosApi.middleware)
           .concat(albumsApi.middleware)
           .concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
