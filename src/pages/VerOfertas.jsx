import React, { useState } from 'react';
import Navbar from '../componentes/navbar';
import Footer from '../componentes/Footer';

function VerOfertas() {
    const [ofertas, setOfertas] = useState([
        { id: 1, title: 'Oferta 1', description: 'Descripción', discount: '10%', clicked: false },
        { id: 2, title: 'Oferta 2', description: 'Descripción', discount: '20%', clicked: false },
        { id: 3, title: 'Oferta 3', description: 'Descripción', discount: '30%', clicked: false },
        // Agrega más ofertas si es necesario
    ]);

    const handleClick = (id) => {
        const updatedOfertas = ofertas.map(oferta =>
            oferta.id === id ? { ...oferta, clicked: !oferta.clicked } : oferta
        );
        setOfertas(updatedOfertas);
    };

    return (
        <div className="App text-center bg-slate-700">
            <Navbar />
            <div className="container mx-auto mt-8 bg-gray-700 rounded-lg p-4">
                <h1 className="text-gray-200 text-3xl font-bold mb-4">Ofertas</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ofertas.map(oferta => (
                        <div key={oferta.id} className={`bg-${oferta.clicked ? 'blue' : 'gray'}-200 p-4 rounded-md shadow-md cursor-pointer custom-card`} onClick={() => handleClick(oferta.id)}>
                            <h2 className="text-xl font-bold mb-2">{oferta.title}</h2>
                            <p className="text-gray-700 mb-2">{oferta.description}</p>
                            <p className="text-green-600 font-bold">{oferta.discount} de descuento</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default VerOfertas;

