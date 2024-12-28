import { createSlice } from "@reduxjs/toolkit";

interface comment {
  id: number;
  description: string;
  createdAt: string;
  users: {
    id: number;
    name: string;
    roleId: string;
  };
}
// Defining the product data model
export interface product {
  category?: string;
  comments: {
    data: comment[];
  };
  createAt: string;
  description: string;
  galleries: [
    {
      id: number;
      pic: string;
    }
  ];
  id: number;
  name: string;
  price: number;
  quantity: number;
  pic: string;
}
const initialState: product[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Action to fetch and add products to the state
    fetchData: (state, action: { payload: product[] }) => {
      state.push(...action.payload);
    },
  },
});

// Exporting the fetchData action to use it in other parts of the app
export const { fetchData } = productsSlice.actions;
export default productsSlice.reducer;
