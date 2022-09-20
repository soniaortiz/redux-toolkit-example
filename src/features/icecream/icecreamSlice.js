import { createSlice } from "@reduxjs/toolkit";
import {order as orderCake} from '../cake/cakeSlice';

const initialState = {
    numberOfIcecream: 30
}
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        order: (state)=>{
            state.numberOfIcecream--;
        },

        restock: (state, action)=>{
            state.numberOfIcecream+=action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(orderCake, (state)=>{
            state.numberOfIcecream--;
        })
    }
});

export default icecreamSlice.reducer;
export const {order, restock} = icecreamSlice.actions;
