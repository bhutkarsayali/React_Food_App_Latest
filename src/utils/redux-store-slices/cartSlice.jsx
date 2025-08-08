import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating - directly modifying state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.action.pop();
    },
    clearCart: (state) => {
      // console.log(state) Not allowed by redux, use below code instead
      console.log(current(state));
      // RTK says either mutate the sate or return a new state
      state.items.length = 0;
      // OR return {items: []} - this new [] will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
