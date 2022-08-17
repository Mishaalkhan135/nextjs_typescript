import {createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

export const productSlice = createSlice({
    name:"product",
    initialState:{
        name:null
    },
    reducer:{
        setProductData:(state,action)=>{
            state.name = action.payload,
        },
    },
    extraReducers:{
        [HYDRATE]:(state,action)=>{
            state.name = action.payload.profile.name
        }
    }
})
