// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../ducks/postsSlice";
import usersReducer from "../ducks/usersSlice";

export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer,
    },
    devTools:true
});