import { createSlice } from '@reduxjs/toolkit';

const initialState = {name: "",email: "",message: ""}

const contactSlice = createSlice({

name: 'contacts',
initialState,
reducers: {
addContacts: (state, action) => {
state.push(action.payload);
return state;
}
}

})
export const { addContacts} = contactSlice.actions;
export default contactSlice;