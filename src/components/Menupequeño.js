import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbarstyles.css";


function Menupequeño() {
  const redirectDiplomados = useNavigate();
  const redirectSeminarios = useNavigate();
  const redirectCursos = useNavigate();

  return (
    <div className="md:hidden text-center items-center bg-gray-800">
     
       

        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <p
            onClick={() => redirectDiplomados("/diplomados")}
            class="cursor-pointer bg-gray-500 text-gray-900 block px-3 py-2 rounded-md text-base font-medium text-center"
            // aria-current="page"
          >
            Diplomados
          </p>
        </div>

        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <p
            onClick={() => redirectSeminarios("/seminarios")}
            class="cursor-pointer bg-gray-500 text-gray-900 block px-3 py-2 rounded-md text-base font-medium text-center"
            // aria-current="page"
          >
            Seminarios
          </p>
        </div>

        
      </div>
   
  );
}

export default Menupequeño;
