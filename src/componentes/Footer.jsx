// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-customB text-customA py-8 text-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
          {/* Información de contacto */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Contacto</h3>
            <p>Correo electrónico: geraAmaya@gmail.com</p>
            <p>Teléfono: +614 295 49 99</p>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
          </div>
          {/* Enlaces de navegación */}
          <div className="flex flex-col items-center">
            <ul>
              <li className='hover:text-customE transition-all'><a href="/">Inicio</a></li>
              <li className='hover:text-customE transition-all'><a href="/conocenos">Acerca de nosotros</a></li>
              <li className='hover:text-customE transition-all'><a href="/servicio">Servicios</a></li>
              <li className='hover:text-customE transition-all'><a href="/conocenos">Contacto</a></li>
            </ul>
          </div>
        </div>
        {/* Derechos de autor */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Amaya's web. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
