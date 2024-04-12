import React from "react";
import HomePage from "./pages/HomePages";
import CrearCita from "./pages/CrearCita"
import VistaCitas from "./pages/VistaCitas";
import VerOfertas from "./pages/VerOfertas";
import Nosotros from "./pages/Nosotros";



import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cita" element={<CrearCita />} />
      <Route path="/ofertas" element={<VerOfertas />} />
      <Route path="/ver_cita" element={<VistaCitas />} />
      <Route path="/conocenos" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;