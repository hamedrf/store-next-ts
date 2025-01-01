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
} = { show: [], all: [], filter: [] };

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
  },
});

// Exporting the fetchData action to use it in other parts of the app
export const { fetchData, filterdata } = productsSlice.actions;
export default productsSlice.reducer;
