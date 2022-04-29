import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { buy } from "../store/slices/carritoSlice";

import { listarDiplomados } from "../store/slices/diplomadosSlice";
import Navbar from "./Navbar";
//Redux

function Diplomados() {
  const diplomados = useSelector((state) => state.diplomados.listDiplomados);
  // const [carrito, setCarrito] = useState()
  // console.log(carrito)
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarDiplomados());
  }, [dispatch]);


  const addToCart = (id) => {
    const productocarrito = diplomados.find((producto) => producto.id === id);
    console.log(productocarrito)
    dispatch(buy(productocarrito))
  }

  return (
    <div>
      <Navbar />
      <header class="bg-white shadow">
        <div class="max-w-8xl mx-auto py-0 px-4 pb-2 bg-orange-100 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900 text-center pb-5 py-5">
            Diplomados
          </h1>
        </div>
      </header>

      <main className="bg-gray-800">
        <div class="max-w-7xl m-auto">
          {/* <!-- Replace with your content --> */}
          <div class="px-4 py-6 sm:px-0">
            <div class="border-8 border-orange-200 rounded-lg h-1000 ">
              <div class="bg-white">
                <div class="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 text-center">
                    Certifícate con nosotros
                  </h2>

                  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-3 xl:gap-x-8">

                  {diplomados &&
                    diplomados.map((diplomado) => (
                      <div key={diplomado.id} class="mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-3 xl:gap-x-8">
                        <div class="max-h-[32rem] max-w-sm rounded overflow-hidden shadow-lg">
                          <img
                            class="w-full"
                            src={diplomado.img}
                            alt="imagendiplomado"
                          />
                          <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                              {diplomado.title}
                            </div>
                            <p class="max-h-40 text-gray-700 text-base overflow-y-auto">
                             {diplomado.description}
                            </p>
                          </div>
                          <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              $ {diplomado.price}
                            </span>

                            <span class="cursor-pointer hover:bg-orange-300 inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            onClick={() => addToCart(diplomado.id)}>
                              Agregar al carrito
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Diplomados;