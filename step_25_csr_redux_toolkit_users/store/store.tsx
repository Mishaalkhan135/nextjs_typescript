import { configureStore, combineReducers } from "@reduxjs/toolkit";
import count from "./counterSlice";
import users from "./userSlice";

const combinedReducers = combineReducers({
	count,
	users,
});

export const store = configureStore({
	reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
