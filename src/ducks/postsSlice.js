import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, title:'Title1', content: 'content1'},
    {id:2, title:'Title2', content: 'content2'},
    {id:3, title:'Title3', content: 'content3'},
];

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost: (state,action) => {
            state.push(action.payload)
        }
    }
})

const { reducer, actions } = postsSlice;

export default reducer;

export const { addPost } = actions;

export const selectPosts = (rootState) => rootState.posts;