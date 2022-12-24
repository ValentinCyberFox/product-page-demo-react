import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem("products")) : [],
  },

  reducers: {
    //Все что относится к корзине
    addProduct: (prevState, action) => {
      const data = action.payload
      if (prevState.products.some(product => product.id === data.id)) {
        return
      }

      return {
        ...prevState,
        products: [...prevState.products, data],
      }
    },

    removeProduct: (prevState, action) => {
      const data = action.payload
      return {
        ...prevState,
        products: prevState.products.filter((product) => product.id !== data.id),
      }
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer