import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrito from '../components/Carrito'
import Diplomados from '../components/Diplomados'
import Principal from '../components/principal'
import Seminarios from '../components/Seminarios'
import Seminarioscursos from '../components/Seminarioscursos'

export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Principal />} />
          <Route exact path="/diplomados" element={<Diplomados />} />
          <Route exact path="/seminarios" element={<Seminarios />} />
          <Route exact path="/carrito" element={<Carrito />} />
          <Route exact path="/cursosseminarios" element={<Seminarioscursos />} />
          
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}
