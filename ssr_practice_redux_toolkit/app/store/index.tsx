import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import profileReducer from "./slice/profile";
import { Action } from "redux";
const makeStore = () =>
	configureStore({
		reducer: {
			profile: profileReducer,
		},
		devTools: true,
	});
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppStore,
	unknown,
	Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
