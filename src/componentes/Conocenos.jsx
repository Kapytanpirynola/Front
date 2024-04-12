import React from "react";
import { Link } from 'react-router-dom'
import youtube from './assets/icons/youtube.png';
/* Youtube */

function Conocenos() {
    return (
        <div className="flex justify-center items-center ">
        <form className="bg-customB shadow-md rounded px-8 pt-6 pb-8 mb-2">
            <div className="mb-4">
            </div>
            <div className="flex items-center justify-center">
                <Link to="/conocenos" className="flex items-center hover:bg-customB hover:text-slate-300 transition-color duration-600 text-black font-bold rounded focus:outline-none focus:shadow-outline transition-all">
                    <img src={youtube} alt="Calendario" className="w-12 h-12 mr-1" /> Conocenos
                </Link>
            </div>
        </form>
        </div>
    );
    }

export default Conocenos;