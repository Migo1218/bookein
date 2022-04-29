import { createSlice } from "@reduxjs/toolkit";


export const carritoSlice = createSlice({
    name: "carrito",
    initialState: {
        productoscarrito: []
    },
    reducers:{
        setCarrito: (state, action) => {
            state.productoscarrito = [...state.productoscarrito, action.payload];
        }
    }
});

export default carritoSlice.reducer
export const { setCarrito } = carritoSlice.actions;

export const buy = (productocarrito) => {
    return (dispatch) => {
        dispatch(setCarrito(productocarrito))
    }
}