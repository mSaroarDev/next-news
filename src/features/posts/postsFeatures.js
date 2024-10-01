import { getAllCategory } from "@/libs/category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch the api
// export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
//   const res = await allPosts();
//   const data = await res.json();
//   return data.data;
// });

let initialState = {
  isLoading: false,
  postsData: [],
  error: false,
};

const posts = createSlice({
  name: "posts",
  initialState,
  // extraReducers: (builder) => {
  //   builder.addCase(fetchCategories.pending, (state, action) => {
  //     state.isLoading = true;
  //   });

  //   builder.addCase(fetchCategories.fulfilled, (state, action) => {
  //     (state.isLoading = false), (state.categoriesData = action.payload);
  //   });

  //   builder.addCase(fetchCategories.rejected, (state, action) => {
  //     state.error = true;
  //   });
  // },

  reducers: {
    addPost: (state, action) => {
      state.postsData.push(action.payload);
    },
  },
});

export const { addCategory } = posts.actions;
export default posts.reducer;
