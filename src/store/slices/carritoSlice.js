import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  name: "carrito",
  initialState: {
    productoscarrito: JSON.parse(localStorage.getItem("productosadd")) || [],
  },
  reducers: {
    setCarrito: (state, action) => {
      const nuevosProductos = [...state.productoscarrito, action.payload];
      localStorage.setItem("productosadd", JSON.stringify(nuevosProductos));
      state.productoscarrito = nuevosProductos;
    },
    deleteItemCarrito: (state, action) => {
      const nuevosProductosDelete = [...action.payload];
      localStorage.setItem(
        "productosadd",
        JSON.stringify(nuevosProductosDelete)
      );
      state.productoscarrito = nuevosProductosDelete;
    },
  },
});

export default carritoSlice.reducer;
export const { setCarrito } = carritoSlice.actions;
export const { deleteItemCarrito } = carritoSlice.actions;

// export const buy = (productocarrito) => {
//   return (dispatch) => {
//     dispatch(
//       setCarrito(
//         productocarrito
//       )
//     );
// };
// };
