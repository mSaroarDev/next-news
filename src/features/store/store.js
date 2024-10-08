"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import loginReducer from "@/features/user/loginSlice";
import currUserReducer from "@/features/user/currUserSlice";
import notificationsReducer from "@/features/notifications/notificationSlice";
import categoriesReducer from "@/features/category/categorySlice";
import postsReducer from "@/features/posts/postsSlice";
import publicCategoriesReducer from "@/features/publicCategory/publicCategorySlice";
import publicPostsReducer from "@/features/publicPosts/publicPostsSlice";
import publicCommentsReducer from "@/features/publicComments/publicCommentsSlice";

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    const { publicCategories, publicPosts, publicComments } = state;

    // Purge the persisted state
    storage.removeItem("persist:root"); // Adjust the key if different
    return combineReducers({
      login: loginReducer,
      currUser: currUserReducer,
      notifications: notificationsReducer,
      categories: categoriesReducer,
      posts: postsReducer,
      publicCategories: publicCategoriesReducer,
      publicPosts: publicPostsReducer,
      publicComments: publicCommentsReducer,
    })(
      {
        publicPosts, // keep the posts state
        publicCategories, // keep the categories state
        publicComments, // keep the categories state
      },
      action
    ); // Pass undefined to reset to initial state
  }

  return combineReducers({
    login: loginReducer,
    currUser: currUserReducer,
    notifications: notificationsReducer,
    categories: categoriesReducer,
    posts: postsReducer,
    publicCategories: publicCategoriesReducer,
    publicPosts: publicPostsReducer,
    publicComments: publicCommentsReducer,
  })(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
