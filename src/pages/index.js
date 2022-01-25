import React, { Fragment } from 'react';

import Hero from '../components/home/hero';
import Properties from '../components/home/properties';
import About from '../components/home/about';
import OfficeInfo from '../components/home/office-info';
import Contact from '../components/contact';
import Customers from '../components/home/customers';

export default ()=> {

  return(
    <Fragment>
      <Hero />      
      <Properties />
      <Customers title='NUESTROS CLIENTES CONFÍAN EN NOSOTROS' />
      <About />
      <OfficeInfo />
      <Contact />
    </Fragment>
  )
}