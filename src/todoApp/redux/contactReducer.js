import { createSlice } from '@reduxjs/toolkit';

const initialState = {name: "",email: "",message: ""}

const contactSlice = createSlice({

name: 'contacts',
initialState,
reducers: {
addContact: (state, action) => {
state.push(action.payload);
return state;
}
}

})
export const contactActions = contactSlice.actions;
export default contactSlice;