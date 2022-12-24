import { createSlice } from "@reduxjs/toolkit";

export const favotiteSlice = createSlice({
  name: 'favorite',
  initialState: {
    products: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem("favorites")) : [],
  },

  reducers: {
    //Все что относится к избранному
    addFavorite: (prevState, action) => {
      const data = action.payload
      if (prevState.products.some(product => product.name === data.name)) {
        return
      }

      return {
        ...prevState,
        products: [...prevState.products, data],
      }
    },

    removeFavorite: (prevState, action) => {
      const data = action.payload
      return {
        ...prevState,
        products: prevState.products.filter((product) => product.name !== data.name)
      }
    }
  }
})

export const { addFavorite, removeFavorite } = favotiteSlice.actions

export default favotiteSlice.reducer