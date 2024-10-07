import { getAllCategory } from "@/libs/category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch the api
export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const res = await getAllCategory();
  const data = await res.json();
  return data.data;
});

let initialState = {
  isLoading: false,
  categoriesData: [],
  error: false,
};

const categories = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      (state.isLoading = false), (state.categoriesData = action.payload);
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.error = true;
    });
  },

  reducers: {
    addCategory: (state, action) => {
      state.categoriesData = [...state.categoriesData, action.payload];
    },

    editCategoryData: (state, action) => {
      state.categoriesData = state.categoriesData.map((item) =>
        item._id === action.payload.id
          ? { ...item, ...action.payload.data }
          : item
      );
    },
  },
});

export const { addCategory, editCategoryData } = categories.actions;
export default categories.reducer;
