import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";

const initialState = {
    name: '',
    cost: 0
};
const RESET = 'movie/reset'
const formSlice = createSlice({
    name:"form",
    initialState,
    reducers: {
        changeName(state,action){
            state.name = action.payload
        },
        changeCost(state,action){
            state.cost = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        });
    }
});

export const formReducer = formSlice.reducer;
export const {changeCost, changeName} = formSlice.actions;

