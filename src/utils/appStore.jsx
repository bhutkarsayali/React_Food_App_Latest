const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./redux-store-slices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
