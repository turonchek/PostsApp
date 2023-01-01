import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id:1, 
        title:'Title1', 
        content: 'content1',
        date: sub(new Date(), { minutes:10 }).toISOString(),
        reactions: {
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0,
        }
    },
    {
        id:2, 
        title:'Title2', 
        content: 'content2',
        date: sub(new Date(), { minutes:5 }).toISOString(),
        reactions: {
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0,
        }
    },
    {
        id:3, 
        title:'Title3', 
        content: 'content3',
        date: sub(new Date(), { minutes:15 }).toISOString(),
        reactions: {
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0,
        }
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
                        userId,
                        reactions: {
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0,
                        }
                    }
                }
            }
        },
        addReaction: (state,action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find( post => post.id == postId )
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

const { reducer, actions } = postsSlice;

export default reducer;

export const { addPost, addReaction } = actions;

export const selectPosts = (rootState) => rootState.posts;