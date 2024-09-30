import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationData: [],
};

const notifications = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notificationData = action.payload;
    },
  },
});

export const { setNotifications } = notifications.actions;
export default notifications.reducer;
