import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: 'Michael Johnson'},
    {id: 2, name: 'Neil Young'},
    {id: 3, name: 'John Michaelson'},
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

const { reducer, actions } = userSlice;

export default reducer;

export const selectUsers = (rootState) => rootState.users;
