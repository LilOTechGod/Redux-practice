import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

// returns an action object of this shape:
export default store;
