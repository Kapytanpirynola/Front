/* Componentes del CRUD */
import React from "react";
import Navbar from "../componentes/navbar";
import AgendarCita from "../componentes/AgendarCita";
import VerCita from "../componentes/VerCita";
import Ofertas from "../componentes/Ofertas";
import Conocenos from "../componentes/Conocenos";

import Footer from '../componentes/Footer';
import Nav from '../componentes/Nav';
import Body from '../componentes/Body';
import Banner from '../componentes/Banner';
import Us from '../componentes/Us';
import GoogleMapComponent from '../componentes/GoogleMapComponent';



function HomePages() {
    return (
        <>
          <Nav/>
          <Us/>
          <Body/>
          <Banner/>
          <GoogleMapComponent/>
         <Footer/>
        </>
      )
}

export default HomePages;
