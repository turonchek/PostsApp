import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id:1, 
        title:'Title1', 
        content: 'content1',
        date: sub(new Date(), { minutes:10 }).toISOString()
    },
    {
        id:2, 
        title:'Title2', 
        content: 'content2',
        date: sub(new Date(), { minutes:5 }).toISOString()
    },
    {
        id:3, 
        title:'Title3', 
        content: 'content3',
        date: sub(new Date(), { minutes:15 }).toISOString()
    },
];

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost: {
            reducer(state,action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id:nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        }
    }
})

const { reducer, actions } = postsSlice;

export default reducer;

export const { addPost } = actions;

export const selectPosts = (rootState) => rootState.posts;