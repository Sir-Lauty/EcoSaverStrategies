import React from 'react'
import Header from './components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './home/route/Home.jsx';
import Proyectos from './proyectos/route/Proyectos.jsx';
import Equipo from './equipo/route/Equipo.jsx';
import Contacto from './contacto/route/Contacto.jsx';

function App() {
  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Header />}>
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="equipo" element={<Equipo />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="/" element={<Home />} />
            </Route>
        </Routes>
      </div>
    </>
  )
}

export default App