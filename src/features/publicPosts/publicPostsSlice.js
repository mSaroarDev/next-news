"use client";
import { getAllPosts } from "@/libs/post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch the api
export const fetchPublicPosts = createAsyncThunk(
  "fetchPublicPosts",
  async () => {
    const res = await getAllPosts();
    const data = await res.json();
    return data.data;
  }
);

let initialState = {
  isLoading: false,
  publicPostsData: [],
  error: false,
};

const publicPosts = createSlice({
  name: "publicPosts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPublicPosts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPublicPosts.fulfilled, (state, action) => {
      (state.isLoading = false), (state.publicPostsData = action.payload);
    });

    builder.addCase(fetchPublicPosts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { addPost, editPost, deletePost } = publicPosts.actions;
export default publicPosts.reducer;
