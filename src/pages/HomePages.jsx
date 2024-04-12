/* Componentes del CRUD */
import React from "react";

import Footer from '../componentes/assets/Footer';
import Nav from '../componentes/assets/Nav';
import Body from '../componentes/assets/Body';
import Banner from '../componentes/assets/Banner';
import Us from '../componentes/assets/Us';
import API from '../componentes/assets/API';



function HomePages() {
    return (
        <>
          <Nav/>
          <Body/>
          <Banner/>
          <Us/>
          <API/>
          <Footer/>
        </>
      )
}

export default HomePages;
