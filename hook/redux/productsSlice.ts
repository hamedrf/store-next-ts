import { createSlice } from "@reduxjs/toolkit";

export interface comment {
  id: number;
  description: string;
  created_at: string;
  user: {
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
  updated_at: string;
  slug: string;
}
interface filter {
  target: keyof product;
  value: string;
}
const initialState: {
  show: product[];
  all: product[];
  filter: filter[];
  cart: product[];
} = { show: [], all: [], filter: [], cart: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Action to fetch and add products to the state
    fetchData: (state, action: { payload: product[] }) => {
      state.all = action.payload;
      state.show = action.payload;
    },
    filterdata: (state, action: { payload: filter }) => {
      const exists = state.filter.some(
        (item) =>
          item.target === action.payload.target &&
          item.value === action.payload.value
      );
      if (exists) {
        state.filter = state.filter.filter(
          (item) =>
            !(
              item.target === action.payload.target &&
              item.value === action.payload.value
            )
        );
      } else {
        state.filter.push(action.payload);
      }
      // set filter
      state.show = state.all.filter((product) =>
        state.filter.every((filter) => product[filter.target] === filter.value)
      );
    },
    addCart: (state, action: { payload: product }) => {
      state.cart.push(action.payload);
    },
  },
});

// Exporting the fetchData action to use it in other parts of the app
export const { fetchData, filterdata, addCart } = productsSlice.actions;
export default productsSlice.reducer;
