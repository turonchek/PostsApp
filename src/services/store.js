// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../ducks/postsSlice";

export const store = configureStore({
    reducer:{
        posts: postsReducer
    },
    devTools:true
});