import React from "react";
import { Link } from 'react-router-dom'
import dolar from './assets/icons/dolar.png';
/* Dollar */

function Ofertas() {
    return (
        <div className="flex justify-center items-center ">
        <form className="bg-customB shadow-md rounded px-11 pt-6 pb-8 mb-2">
            <div className="mb-4">
            </div>
            <div className="flex items-center justify-center">
                <Link to="/ofertas" className="flex items-center hover:bg-customB hover:text-slate-300 transition-color duration-600 text-black font-bold rounded focus:outline-none focus:shadow-outline transition-all">
                    <img src={dolar} alt="ofertas" className="w-12 h-12 mr-1" /> Ofertas
                </Link>
            </div>
        </form>
        </div>
    );
    }

    export default Ofertas;