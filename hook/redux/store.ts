import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

// Configuring the Redux store and adding the products slice
export const store = configureStore({
  reducer: {
    productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
