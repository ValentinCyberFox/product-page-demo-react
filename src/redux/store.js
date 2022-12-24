import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import productColorReducer from "./reducers/productColorReducer";

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    favoriteReducer: favoriteReducer,
    productColorReducer: productColorReducer
  }
})