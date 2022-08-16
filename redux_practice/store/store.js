import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";

export const store = configureStore({
	//declared the counter reducer
	reducer: { counter: counterReducer },
});
