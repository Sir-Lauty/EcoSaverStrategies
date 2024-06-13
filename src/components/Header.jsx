import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Footer from './footer.jsx';

function header() {
    return(
        <>
        <header className="relative bg-[url('../../img/mdzFondo.png')] bg-cover bg-center shadow-md min-h-96">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 container px-6 py-6">
            <div className="flex justify-between">
              <div>
                <h1 className="text-white text-5xl font-bold">EcoSavers Strategies</h1>
                <p className="text-white text-2xl">Por la eficiencia eléctrica</p>
              </div>
              <nav className="flex space-x-6">
                <Link to="/" className="text-gray-300 text-3xl hover:text-white ansition duration-300">Inicio</Link>
                <Link to="/proyectos" className="text-gray-300 text-3xl hover:text-white transition duration-300">Proyectos</Link>
                <Link to="/equipo" className="text-gray-300 text-3xl hover:text-white transition duration-300">Equipo</Link>
                <Link to="/contacto" className="text-gray-300 text-3xl hover:text-white transition duration-300">Contacto</Link>
              </nav>
            </div>
          </div>
        </header>
        <article className='px-6 py-6'>
            <Outlet />
        </article>
        <Footer/>
        </>
    )
}

export default header