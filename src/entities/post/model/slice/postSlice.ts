import { Post } from "@/types/api";
import { RootState } from "@/app/providers/store/store";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const postAdapter = createEntityAdapter<Post>();

const postSlice = createSlice({
    name: "post",
    initialState: postAdapter.getInitialState(),
    reducers: {
    },
});

export const postReducer = postSlice.reducer;

const postsSelectors = postAdapter.getSelectors<RootState>(
    (state) => state.posts
);

export const { 
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectEntities: selectPostEntities,
    selectIds: selectPostIds,
    selectTotal: selectTotalPosts,
} = postsSelectors;
