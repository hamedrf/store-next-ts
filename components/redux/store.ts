import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    counter: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
