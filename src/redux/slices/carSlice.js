import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    cars: []
};
const RESET = 'movie/reset'
const carSlice = createSlice({
    name:"car",
    initialState,
    reducers: {
        changeSearch(state,action){
            state.search = action.payload
        },
        addCar(state,action){
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state,action){
            const updated = state.cars.filter(car => car.id !== action.payload)
            state.cars = updated
        }
    }
})

export const carReducer =  carSlice.reducer;
export const {changeSearch, addCar, removeCar} = carSlice.actions;