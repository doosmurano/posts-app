import { postsApi } from "@/shared/api/api";
import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "@/entities/post/model/slice/postSlice";
import { userReducer } from "@/entities/user/model/slice/userSlice";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        posts: postReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
