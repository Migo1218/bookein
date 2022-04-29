import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cursos from '../components/Cursos'
import Diplomados from '../components/Diplomados'
import Principal from '../components/principal'
import Seminarios from '../components/Seminarios'

export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Principal />} />
          <Route exact path="/diplomados" element={<Diplomados />} />
          <Route exact path="/seminarios" element={<Seminarios />} />
          <Route exact path="/cursos" element={<Cursos />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}
