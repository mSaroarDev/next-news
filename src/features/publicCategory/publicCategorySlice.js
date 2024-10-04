import { getAllCategory } from "@/libs/category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch the api
export const fetchPublicCategories = createAsyncThunk(
  "fetchPublicCategories",
  async () => {
    const res = await getAllCategory();
    const data = await res.json();
    return data.data;
  }
);

let initialState = {
  isLoading: false,
  publicCategoriesData: [],
  error: false,
};

const publicCategories = createSlice({
  name: "publicCategories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPublicCategories.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPublicCategories.fulfilled, (state, action) => {
      (state.isLoading = false), (state.publicCategoriesData = action.payload);
    });

    builder.addCase(fetchPublicCategories.rejected, (state, action) => {
      state.error = true;
    });
  },

  reducers: {
    addCategory: (state, action) => {
      state.publicCategoriesData = [
        ...state.publicCategoriesData,
        action.payload,
      ];
    },

    editCategory: (state, action) => {
      state.publicCategoriesData = state.publicCategoriesData.map((item) =>
        item._id === action.payload.id
          ? { ...item, ...action.payload.data }
          : item
      );
    },
  },
});

export const { addCategory, editCategory } = publicCategories.actions;
export default publicCategories.reducer;
