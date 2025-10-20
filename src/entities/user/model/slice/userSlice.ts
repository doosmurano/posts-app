import { User } from "@/entities/user/model/types";
import { RootState } from "@/app/providers/store/store";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter<User>();

const userSlice = createSlice({
    name: "user",
    initialState: userAdapter.getInitialState(),
    reducers: {
    },
});

export const userReducer = userSlice.reducer;

const usersSelectors = userAdapter.getSelectors<RootState>(
    (state) => state.users
);

export const { 
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectEntities: selectUserEntities,
    selectIds: selectUserIds,
    selectTotal: selectTotalUsers,
} = usersSelectors;
