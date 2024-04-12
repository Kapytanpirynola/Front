/* Componentes del CRUD */
import React from "react";

import Footer from '../componentes/assets/Footer';
import Nav from '../componentes/assets/Nav';
import Body from '../componentes/assets/Body';
import Banner from '../componentes/assets/Banner';
import Us from '../componentes/assets/Us';
import GoogleMapComponent from '../componentes/assets/GoogleMapComponent';



function HomePages() {
    return (
        <>
          <Nav/>
          <Body/>
          <Banner/>
          <Us/>
          <GoogleMapComponent/>
          <Footer/>
        </>
      )
}

export default HomePages;
