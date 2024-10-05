"use client";
import { getComments } from "@/libs/comment";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch the api
export const fetchPublicComments = createAsyncThunk(
  "fetchPublicComments",
  async () => {
    const res = await getComments();
    const data = await res.json();
    return data.data;
  }
);

let initialState = {
  isLoading: false,
  publicCommentsData: [],
  error: false,
};

const publicComments = createSlice({
  name: "publicComments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPublicComments.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPublicComments.fulfilled, (state, action) => {
      (state.isLoading = false), (state.publicCommentsData = action.payload);
    });

    builder.addCase(fetchPublicComments.rejected, (state, action) => {
      state.error = true;
    });
  },

  reducers: {
    addComment: (state, action) => {
      console.log("data in slice", action.payload.data);
      state.publicCommentsData.unshift(action.payload);
    },
  },
});

export const { addComment } = publicComments.actions;
export default publicComments.reducer;
