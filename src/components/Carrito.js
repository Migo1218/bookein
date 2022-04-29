import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

function Carrito() {
  const productosCarrito = useSelector((state) => state.carrito.productoscarrito);
  console.log(productosCarrito)

  return (
    <div>
      <Navbar/>
      <header class="bg-white shadow">
        <div class="max-w-8xl mx-auto py-0 px-4 pb-2 bg-orange-100 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900 text-center pb-5 py-5">
            Productos añadidos
          </h1>
        </div>
      </header>

      
    </div>
  )
}

export default Carrito