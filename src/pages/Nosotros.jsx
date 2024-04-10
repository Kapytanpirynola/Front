
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componentes/navbar'; // Asegúrate de importar Navbar si es un componente externo
import Footer from '../componentes/Footer'; // Asegúrate de importar Footer si es un componente externo

function Conocenos() {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <div className=" container mx-auto mt-20 mb-20">
                <h1 className="text-3xl font-bold mb-4">¿Quienes somos?</h1>
                <p className="text-lg mb-4">
                    Somos una empresa dedicada a brindar servicios de salud de alta calidad a nuestra comunidad.
                    Nuestro equipo está formado por profesionales altamente capacitados y comprometidos con el bienestar
                    de nuestros pacientes.
                </p>
                <p className="text-lg mb-4">
                    Nos esforzamos por ofrecer un ambiente acogedor y seguro donde nuestros pacientes se sientan
                    cómodos y confiados en la atención que reciben. Estamos comprometidos con la excelencia en el
                    servicio y la satisfacción del cliente.
                </p>
                <p className="text-lg mb-4">
                    ¡Gracias por elegirnos para cuidar de tu salud y bienestar!
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Conocenos;
