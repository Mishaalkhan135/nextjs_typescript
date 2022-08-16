import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const ProfileSlice = createSlice({
	name: "profile",
	initialState: {
		name: null,
	},
	reducers: {
		setProfileDate: (state, action) => {
			state.name = action.payload;
		},
	},
	//======================================================================================
	//this action is called whenever u call a page with ssr props
	//======================================================================================
	extraReducers: {
		//========================================================================================
		//when u goto server and dispatch the hydrate will take the action payload and set it in the state and on that page u will have the profile state inialized with name.
		//======================================================================================
		[HYDRATE]: (state, action) => {
			state.name = action.payload.profile.name;
		},
	},
});
