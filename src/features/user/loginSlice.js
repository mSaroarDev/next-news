import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export default loginSlice.reducer;
export const { setLogged } = loginSlice.actions;
