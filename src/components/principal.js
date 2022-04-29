import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Principal() {
  const redirectDiplomados = useNavigate();
  const redirectSeminarios = useNavigate();
  const redirectCursos = useNavigate();



  return (
    <div>
    <Navbar />
    {/* <header class="bg-red-600">
        <div class="max-w-7xl mx-auto py-0 px-4 pb-2 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Diplomados</h1>
        </div>
      </header>  */}


    <main className="bg-gray-800">
      <div class="max-w-7xl m-auto py-6 sm:px-6 lg:px-8">
        {/* <!-- Replace with your content --> */}
        <div class="px-4 py-6 sm:px-0">
          <div class="border-8 border-orange-200 rounded-lg h-1000 ">
            <div class="bg-white">
              <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 text-center">
                  Cursos de educación continua
                </h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-3 xl:gap-x-8">
                  {/* Primer div  */}

                  <div class="group relative">
                    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        onClick={() => redirectDiplomados("/diplomados")}
                        src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1651193857/incapresources/graduation-907565_640_mnhui2.jpg"
                        alt="Diplomados"
                        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div class="mt-4 flex justify-center">
                      <div class="text-center">
                        <h3 class="text-base font-extrabold tracking-tight text-gray-900 text-center">
                          <p
                            onClick={() => redirectDiplomados("/diplomados")}
                            className="cursor-pointer"
                          >
                            <span
                              aria-hidden="true"
                              class="absolute inset-0"
                            ></span>
                            DIPLOMADOS
                          </p>
                        </h3>
                        {/* <p class="mt-1 text-sm text-gray-500">Black</p> */}
                      </div>
                      {/* <p class="text-sm font-medium text-gray-900">$35</p> */}
                    </div>
                  </div>

                  {/* Segundo Div  */}

                  <div class="group relative">
                    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1651190505/incapresources/lecture-3986809_640_qfabq5.jpg"
                        alt="Front of men&#039;s Basic Tee in black."
                        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div class="mt-4 flex justify-center">
                      <div class="text-center">
                        <h3 class="text-base font-extrabold tracking-tight text-gray-900 text-center">
                          <p
                            onClick={() => redirectSeminarios("/seminarios")}
                            className="cursor-pointer"
                          >
                            <span
                              aria-hidden="true"
                              class="absolute inset-0"
                            ></span>
                            SEMINARIOS
                          </p>
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tercer Div  */}

                  <div class="group relative">
                    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1651190704/incapresources/apple-256261_640_slqrdf.jpg"
                        alt="Front of men&#039;s Basic Tee in black."
                        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div class="mt-4 flex justify-center">
                      <div class="text-center">
                        <h3 class="text-base font-extrabold tracking-tight text-gray-900 text-center">
                          <p
                            onClick={() => redirectCursos("/cursos")}
                            className="cursor-pointer"
                          >
                            <span
                              aria-hidden="true"
                              class="absolute inset-0"
                            ></span>
                            CURSOS CORTOS
                          </p>
                        </h3>
                        {/* <p class="mt-1 text-sm text-gray-500">Black</p> */}
                      </div>
                      {/* <p class="text-sm font-medium text-gray-900">$35</p> */}
                    </div>
                  </div>
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

export default Principal;
