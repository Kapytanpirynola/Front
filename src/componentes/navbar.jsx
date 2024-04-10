import React from 'react';

function Navbar() {
return (
    <div>
        <nav className="bg-customB p-4">
            <ul className="flex flex-wrap justify-center text-customA text-2xl">
                <li className="mr-4">
                <a href="/" className=" hover:text-customE transition-all">Inicio</a>
                </li>
                <li className="mr-4">
                <a href="/conocenos" className=" hover:text-customE transition-all">Acerca de</a>
                </li>
                <li className="mr-4">
                <a href="/servicios" className=" hover:text-customE transition-all">Servicios</a>
                </li>
                <li>
                <a href="/conocenos" className=" hover:text-customE transition-all">Contacto</a>
                </li>
            </ul>
        </nav>
    </div>
);
}

export default Navbar;
