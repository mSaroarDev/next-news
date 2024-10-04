"use client";
import { getAllPosts } from "@/libs/post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch the api
export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const res = await getAllPosts();
  const data = await res.json();
  console.log("data", data);
  return data.data;
});

let initialState = {
  isLoading: false,
  postsData: [],
  error: false,
};

const posts = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      (state.isLoading = false), (state.postsData = action.payload);
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = true;
    });
  },

  reducers: {
    addPost: (state, action) => {
      state.postsData.push(action.payload);
    },

    editPost: (state, action) => {
      state.postsData = state.postsData.map((item) =>
        item._id === action.payload.id
          ? { ...item, ...action.payload.data }
          : item
      );
    },
  },
});

export const { addPost, editPost } = posts.actions;
export default posts.reducer;
