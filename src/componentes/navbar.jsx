import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900 p-4">
        <ul className="flex flex-wrap justify-center text-white text-2xl">
          <li className="mr-4">
            <a href="/" className="hover:text-gray-300 transition-all">Inicio</a>
          </li>
          <li className="mr-4">
            <a href="/conocenos" className="hover:text-gray-300 transition-all">Acerca de</a>
          </li>
          <li>
            <a href="/conocenos" className="hover:text-gray-300 transition-all">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
