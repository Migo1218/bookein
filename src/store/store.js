import { configureStore } from '@reduxjs/toolkit'
//REDUCER
import diplomados from "./slices/diplomadosSlice"
import carrito from "./slices/carritoSlice"

export const store = configureStore({
  reducer: {
    diplomados,
    carrito  
  },
})

