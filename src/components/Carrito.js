import {  useDispatch, useSelector } from "react-redux";
import { deleteItemCarrito } from "../store/slices/carritoSlice";
import Navbar from "./Navbar";

function Carrito() {

  
  const productosCarrito = useSelector(
    (state) => state.carrito.productoscarrito
  );

  const dispatch = useDispatch();
  

  const deleteItem = (id) => {
    const producto = JSON.parse(localStorage.getItem("productosadd"));
        console.log(producto)
        const nuevosProductos = producto.filter(producto => producto.id !== id);
    
        console.log(nuevosProductos)
        // localStorage.setItem('productosadd',JSON.stringify(nuevosProductos));
    dispatch(deleteItemCarrito(nuevosProductos))
   
  }
  // console.log(productosCarrito);

  // localStorage.setItem('productosadd', JSON.stringify(productosCarrito));
  // const productUse = JSON.parse(localStorage.getItem('productosadd'));
  // console.log(JSON.parse(productUse))
  // console.log(productUse)

  return (
    <div>
      <Navbar />
      <header class="bg-white shadow">
        <div class="max-w-8xl mx-auto py-0 px-4 pb-2 bg-orange-100 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900 text-center pb-5 py-5">
            Estás a un paso de adquirir nuestros productos...
          </h1>
        </div>
      </header>

      <div class="bg-white">

        {
          productosCarrito && productosCarrito.map((productoadd)=>(

        <div class="pt-6">
          {/* <!-- Image gallery --> */}
          <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:gap-x-8">
           
          
            <div class="aspect-w-full aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={productoadd.img}
                alt="Model wearing plain white basic tee."
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {productoadd.title}
              </h1>
            </div>

            {/* <!-- Options --> */}
            <div class="mt-4 lg:mt-0 lg:row-span-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">$ {productoadd.price}</p>

              {/* <!-- Reviews --> */}

              <form class="mt-10">
                {/* <!-- Colors --> */}

                <button
                  type="button"
                  class="mt-10 w-full bg-orange-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-200"
                >
                  Comprar
                </button>
                <button
                onClick={()=>deleteItem(productoadd.id)}
                  type="button"
                  class="mt-10 w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-200"
                >
                  Eliminar producto del carrito
                </button>

                
              </form>
            </div>

            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* <!-- Description and details --> */}
             

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Detalles del producto</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">
                  {productoadd.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          ))
        }

      </div>
    </div>
  );
}

export default Carrito;
