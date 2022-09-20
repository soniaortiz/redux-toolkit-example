import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        order: (state)=>{
            state.numberOfCakes--;
        },
        restock: (state, action)=>{
            state.numberOfCakes+=action.payload
        }
    }
});

export default cakeSlice.reducer;
export const {order, restock} = cakeSlice.actions;
