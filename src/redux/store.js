import {configureStore} from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { carReducer } from "./slices/carSlice";

export const store = configureStore({
    reducer: {
        form: formReducer,
        car: carReducer
    }
})