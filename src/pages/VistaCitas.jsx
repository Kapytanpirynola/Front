import React, { useState, useEffect } from 'react';
import Navbar from '../componentes/navbar';
import Footer from '../componentes/Footer';

function VerCitas() {
    
    const [appointments, setCitas] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/appointments';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCitas(data);
            })
            .catch(error => {
                console.error('Error al recuperar las citas:', error);
            });
    }, []);

    const handleDeleteAppointment = async (id) => {
        try {
        const response = await fetch(`http://localhost:3001/appointments/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            setCitas(appointments.filter(cita => cita.id !== id));
            console.log('Cita eliminada exitosamente');
        } else {
            console.error('Error al eliminar la cita:', response.statusText);
        }
        } catch (error) {
        console.error('Error al eliminar la cita:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Mis citas</h1>
                {appointments.length === 0 ? (
                    <p>No tienes citas programadas.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {appointments.map((cita, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                                <h2 className="text-xl font-bold mb-2">Nombre: {cita.name}</h2>
                                <p className="text-gray-700 mb-2">email: {cita.email}</p>
                                <p className="text-gray-700 mb-2">date: {cita.date}</p>
                                <p className="text-gray-700 mb-2">phone: {cita.phone}</p>
                                <p className="text-gray-700 mb-2">time: {cita.time}</p>
                                <p className="text-gray-700 mb-2">service: {cita.service}</p>
                                <button className='bg-customD hover:text-customA text-customE font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline flex items-center justify-center al transition-all' onClick={() => handleDeleteAppointment(cita.id)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default VerCitas;
