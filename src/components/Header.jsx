import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from './footer.jsx';
import Fondo from '../img/mdzFondo.jpg';

function Header() {
  const location = useLocation();
  const path = location.pathname;

  let seccion = '';
  if (path === '/') {
    seccion = (
      <>
        <div className='pt-32'>
          <label className='py-2 px-4 text-sm border border-inherit text-white font-bold rounded-xl'>CodeWisperers</label>
        </div>
        <div className='pt-4'>
          <p className='text-white text-4xl'>¡Bienvenido a EcoSavers Strategies!</p>
        </div>
        <div className='pt-4 flex'>
          <div>
            <Link to="/equipo"><button className='py-2 px-4 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300'>Más sobre nosotros</button></Link>
          </div>
          <div className='pl-8'>
            <Link to="/contacto"><button className='py-2 px-4 border border-inherit bg-transparent hover:bg-white text-white hover:text-marca-gris font-bold rounded-xl transition duration-300'>Contactanos</button></Link>
          </div>
        </div>
      </>
    );
  } else if (path === '/proyectos') {
    seccion = (
    <>
      <div className='pt-40'>
        <p className='pt-2 text-white text-4xl'>Nuestros trabajos</p>
      </div>
    </>);
  } else if (path === '/equipo') {
    seccion = (
    <>
      <div className='pt-40'>
        <p className='pt-2 text-white text-4xl'>Conocé nuestro equipo</p>
      </div>
    </>);
  } else if (path === '/contacto') {
    seccion = (
    <>
      <div className='pt-40'>
        <p className='pt-2 text-white text-4xl'>¡Contactanos!</p>
      </div>
    </>);
  }
  return(
    <>
      <header className="relative bg-cover bg-center shadow-md min-h-96" style={{ backgroundImage: `url(${Fondo})` }}>
        <div className="absolute inset-0 bg-black opacity-40"/>
        <div className="relative z-10 px-6 py-6">
          <div className="grid items-center justify-center md:flex md:justify-between">
            <div>
              <h1 className="text-white text-4xl font-bold">EcoSavers Strategies</h1>
              <p className="text-white text-xl text-center md:text  -left">Por la eficiencia eléctrica</p>
            </div>
            <nav className="flex space-x-6 items-start">
              <button><Link to="/" className="text-gray-300 text-xl hover:text-white ansition duration-300">Inicio</Link></button>
              <button><Link to="/proyectos" className="text-gray-300 text-xl hover:text-white transition duration-300">Proyectos</Link></button>
              <button><Link to="/equipo" className="text-gray-300 text-xl hover:text-white transition duration-300">Equipo</Link></button>
              <button><Link to="/contacto" className="text-gray-300 text-xl hover:text-white transition duration-300">Contacto</Link></button>
            </nav>
          </div>
          <div>
            {seccion}
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

export default Header