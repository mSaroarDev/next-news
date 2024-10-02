import { getNotification } from "@/libs/notification";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch the api
export const fetchNotifications = createAsyncThunk(
  "fetchNotifications",
  async () => {
    const res = await getNotification();
    const data = await res.json();
    return data.data;
  }
);

const initialState = {
  isLoading: false,
  notificationData: [],
  error: false,
};

const notifications = createSlice({
  name: "notifications",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      (state.isLoading = false), (state.notificationData = action.payload);
    });

    builder.addCase(fetchNotifications.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { setNotifications } = notifications.actions;
export default notifications.reducer;
