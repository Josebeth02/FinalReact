import React from 'react'

import Nav from '../Components/Nav/Nav'
import PagPrincipal from '../Components/PagPrincipal/PagPrincipal'
import Carrusel from '../Components/Carrusel/Carrusel'
import TestCompo from '../Components/Testt/TestComp'
import FooterComp from '../Components/Footer/FooterComp'

function PaginaPrincipal() {
  return (
    <div className='pagPrinc'>
      <Nav/>
      <PagPrincipal/>
      <Carrusel/> 
      <TestCompo/> 
      <FooterComp/>


     
    </div>
  )
}

export default PaginaPrincipal
