import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += Number(action.payload.price);
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.total -= Number(action.payload.price);
      state.products.splice(action.payload.index, 1);
    },
    setCart: (state, action) => {
      state.quantity = action.payload.quantity;
      state.total = action.payload.total;
      state.products = action.payload.products;
    },
  },
});

export const { addProduct, removeProduct, setCart } = cartSlice.actions;
export default cartSlice.reducer;
