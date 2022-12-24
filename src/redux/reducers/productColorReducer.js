import { createSlice } from "@reduxjs/toolkit";
import { ProductColors } from "../../data/appleIphone13/productColors";
import { ProductCharacteristics } from "../../data/appleIphone13/productСharacteristics";

export const productColorSlice = createSlice({

  name: 'productColor',
  initialState: {
    productColorBtns: Object.values(ProductColors),
    productMemoryBtns: ProductCharacteristics.memoryConfig,
    productColorCurrent: {
      name: ProductColors.filter((item) => item.name === 'синий')[0].name,
      productColor: ProductColors.filter((item) => item.name === 'синий')[0].img,
      memoryConfig: ProductCharacteristics.memoryConfig[0],
      productColorBtn: ProductColors.filter((item) => item.name === 'синий')[0].btn,
    }
  },

  reducers: {

    //Все что относится к изменению цвета

    changeProductColor: (prevState, action) => {
      const data = action.payload
      return {
        ...prevState,
        productColorBtns: Object.values(ProductColors),
        productColorCurrent: {
          name: data.name,
          productColor: ProductColors.filter((item) => item.name === data.name)[0].img,
          memoryConfig: prevState.productColorCurrent.memoryConfig,
          productColorBtn: ProductColors.filter((item) => item.name === data.name)[0].btn,
        }
      }
    },

    changeProductMemory: (prevState, action) => {
      const data = action.payload
      return {
        ...prevState,
        productColorBtns: Object.values(ProductColors),
        productColorCurrent: {
          name: prevState.productColorCurrent.name,
          productColor: prevState.productColorCurrent.productColor,
          memoryConfig: data,
          productColorBtn: prevState.productColorCurrent.productColorBtn,
        }
      }
    }
  }
})

export const { changeProductColor, changeProductMemory } = productColorSlice.actions

export default productColorSlice.reducer