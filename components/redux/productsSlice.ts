import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface product {
  id: number;
  titile: string;
  price: number;
  description: string;
  img: string;
  category: string;
}
const initialState: product[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<product[]>) => {
      return action.payload;
    },
  },
});

export const { fetchData } = productsSlice.actions;
export default productsSlice.reducer;
