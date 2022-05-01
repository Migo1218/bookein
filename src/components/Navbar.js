import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/navbarstyles.css";
import Menupequeño from "./Menupequeño";

function Navbar({ toggleOpenClose }) {
  const productosCarrito = useSelector(
    (state) => state.carrito.productoscarrito
  );
  const cantidadArticulos = productosCarrito.length
  const redirectHome = useNavigate();
  const redirectCart = useNavigate();
  
  const [productsLength, setProductsLength] = useState(0)

  console.log(productsLength)

  

  useEffect(() => {
    setProductsLength(
      productosCarrito?.reduce( (previousValue, currentValue) => productsLength + productosCarrito.length,
      0
      )
    );
  }, [productosCarrito]);

  const [openMenu, setOpenMenu] = useState(false);
  // console.log(openMenu);
  const toggleOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="heig">
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  onClick={() => redirectHome("/")}
                  class="h-8 w-8 cursor-pointer"
                  src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1651189637/incapresources/diplomalogo_rgtzjv.png"
                  alt="Workflow"
                />
                
              </div>

              <div class="">
                <div class="relative ml-10 flex items-baseline space-x-4">
                
                  <span
                
                  onClick={() => redirectCart("/carrito")}
                  aria-current="page"
                  class="cursor-pointer material-symbols-outlined hover:bg-gray-900 text-white py-2 px-3 rounded-md">
                    shopping_cart
                  </span>
                  {!cantidadArticulos ? <div></div>:(<div className="productsNumber">{cantidadArticulos}</div>)}
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                {/* <!-- Profile dropdown --> */}
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => toggleOpen()}
                type="button"
                class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="false"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* here  */}
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      </nav>

      {/* <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">{cantidadArticulos}</h1>
            
          </div>
      </header> */}
      {openMenu && <Menupequeño />}
    </div>
  );
}

export default Navbar;
