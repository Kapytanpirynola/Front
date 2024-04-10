

import React from "react";
import Navbar from "../componentes/navbar";
import AgendarCita from "../componentes/AgendarCita";
import VerCita from "../componentes/VerCita";
import Footer from "../componentes/Footer";
import Ofertas from "../componentes/Ofertas";
import Conocenos from "../componentes/Conocenos";
import Banner from "../componentes/Banner";

function HomePages() {
    return (
        <div className="App text-center bg-customD">
        <Navbar />
        <Banner/>
        <div className="flex flex-col items-center justify-center mt-8">
            <div className="w-full m-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 mb-8 mt-2">
                <div className="h-32 rounded-lg"><AgendarCita /></div>
                <div className="h-32 rounded-lg"><VerCita /></div>
                <div className="h-32 rounded-lg"><Ofertas /> </div>
                <div className="h-32 rounded-lg"><Conocenos /></div>
            </div>
            </div>
            <p className="text-lg text-gray-200 mb-5">Aqui nos encontramos</p>
            <div className="flex items-center">
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default HomePages;
