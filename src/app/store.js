import { configureStore } from "@reduxjs/toolkit"; 
// import reducers
import cakeSliceReducer from "../features/cake/cakeSlice";
import icecreamSliceReducer from "../features/icecream/icecreamSlice";
import userSliceReducer from "../features/user/userSlice";
export const store = configureStore({
    reducer: {
        cake: cakeSliceReducer,
        icecream:icecreamSliceReducer,
        user: userSliceReducer
    }
})