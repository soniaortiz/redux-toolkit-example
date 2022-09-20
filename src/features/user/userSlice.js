import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    numberOfUsers: 0,
    isLoading: false,
    usersList: [],
    error: ''
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state)=>{
            state.numberOfUsers++
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending, (state, action)=>{
            state.isLoading=true;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.usersList = action.payload
        });

        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.isLoading=false;
            state.error=action.error.message
        })
    }
});

export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({data})=>{
        return data
    })
})

export default userSlice.reducer;
export const {addUser} = userSlice.actions;