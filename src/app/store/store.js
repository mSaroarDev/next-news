// store.js
"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import loginReducer from "@/features/user/loginSlice";
import currUserReducer from "@/features/user/currUserSlice";
import notificationsReducer from "@/features/notifications/notificationSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  currUser: currUserReducer,
  notifications: notificationsReducer,
});

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
