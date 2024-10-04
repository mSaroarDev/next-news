"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import loginReducer from "@/features/user/loginSlice";
import currUserReducer from "@/features/user/currUserSlice";
import notificationsReducer from "@/features/notifications/notificationSlice";
import categoriesReducer from "@/features/category/categorySlice";
import postsReducer from "@/features/posts/postsSlice";

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    const { posts, categories } = state;

    // Purge the persisted state
    storage.removeItem("persist:root"); // Adjust the key if different
    return combineReducers({
      login: loginReducer,
      currUser: currUserReducer,
      notifications: notificationsReducer,
      categories: categoriesReducer,
      posts: postsReducer,
    })(
      {
        posts, // keep the posts state
        categories, // keep the categories state
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
