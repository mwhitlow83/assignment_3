//matthew whitlow
//assignment 3


import { configureStore } from "@reduxjs/toolkit";
import { reducer }from "./reducer";
import contactSlice from "./contactReducer";

const store = configureStore({
    reducer: reducer,
    contacts: contactSlice.reducer,
    });

export default store;