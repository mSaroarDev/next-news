// currUserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const currUserSlice = createSlice({
  name: "currUser",
  initialState,
  reducers: {
    setCurrUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setCurrUser } = currUserSlice.actions; // Export actions
export default currUserSlice.reducer; // Export reducer
