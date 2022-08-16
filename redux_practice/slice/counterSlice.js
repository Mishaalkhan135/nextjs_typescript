import { createSlice } from "@reduxjs/toolkit";
//==================================================================
//Slices are the functions and actions for reducers in store
//==================================================================
const initialState = {
	value: 0, //initial value for the counter
	//==================================
	//example for userData
	//username : "Mishaal Khan"
	//email : "mishaakkhan@gmail.com"
	//==================================
};
//Creating a slice for counter
export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1; //state.value = state.value + 1
		},
		decrement: (state) => {
			state.value -= 1; //state.value = state.value -1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload; //the data pass through dispatch function where the reducer is called
		},
	},
});
//incrementByAmount Is a function and it deals with the actions (increment and decrement) and then those actions are handled by reducers through redux toolkit
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
