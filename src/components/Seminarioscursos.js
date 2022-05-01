import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../store/slices/carritoSlice";
import { listarDiplomados } from "../store/slices/diplomadosSlice";
import Navbar from "./Navbar";

function Seminarioscursos() {
  const diplomados = useSelector((state) => state.diplomados.listDiplomados);
  // const [carrito, setCarrito] = useState()
  // console.log(carrito)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarDiplomados());
  }, [dispatch]);

  const addToCart = (id) => {
    const productocarrito = diplomados.find((producto) => producto.id === id);
    dispatch(setCarrito(productocarrito));
  };
  const fechaseleccionada = JSON.parse(
    localStorage.getItem("fechaseleccionada")
  );
  const datosusuario = JSON.parse(localStorage.getItem("datosusuario"));
  console.log(datosusuario.nombres);
  return (
    <div>
      <Navbar />
      <header class="bg-white shadow">
        <div class="mx-auto bg-orange-100 ">
          {/* <img  class="w-full h-32" src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1651349545/incapresources/universe-1566161_1920_kx0liz.jpg" alt="banner" /> */}
          <h1 class="text-3xl font-bold text-gray-900 text-center pb-5 py-5">
            ¡Hola{" "}
            <span className="text-orange-500">{datosusuario.nombres}</span> te
            damos la bienvenida!
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
                    A continuación encontrarás los cursos disponibles para la
                    fecha elegida,{" "}
                    <p className="text-orange-500">{fechaseleccionada}</p>
                  </h2>

                  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-3 xl:gap-x-8">
                    {diplomados &&
                      diplomados.map((diplomado) => (
                        <div
                          key={diplomado.id}
                          class="mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-3 xl:gap-x-8"
                        >
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
                              <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                $ {diplomado.price}
                              </p>

                              <button
                                class="bg-orange-500 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-full"
                                onClick={() => addToCart(diplomado.id)}
                              >
                                Agregar al carrito
                              </button>
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

export default Seminarioscursos;
