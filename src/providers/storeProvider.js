"use client";
import { persistor, store } from "@/features/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
