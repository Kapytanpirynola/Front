import React from 'react';
import { Link } from 'react-router-dom'
import Calendario from './assets/icons/calendario.png';
/* Calendario */


function AgendarCita() {
return (
    <div className="flex justify-center items-center ">
    <form className="bg-customB shadow-md rounded px-6 pt-6 pb-8 mb-2">
        <div className="mb-4">
        </div>
        <div className="flex items-center justify-center">
            <Link to="/cita" className="flex items-center hover:bg-customB hover:text-slate-300 transition-color duration-600 text-black font-bold rounded focus:outline-none focus:shadow-outline transition-all">
                <img src={calendario} alt="Calendario" className="w-12 h-12 mr-1" /> Agendar cita
            </Link>
        </div>
    </form>
    </div>
);
}

export default AgendarCita;
