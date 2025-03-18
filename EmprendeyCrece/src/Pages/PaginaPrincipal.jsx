import React from 'react'
import PagPrincipal from '../components/pagPrincipal'
import Carrusel from '../Components/Carrusel/Carrusel'
import Nav from '../Components/Nav'
import TestCompo from '../Components/TestComp'

function PaginaPrincipal() {
  return (
    <div>
      <Nav/>
      <PagPrincipal/>
      <Carrusel/>
      <TestCompo/>
    </div>
  )
}

export default PaginaPrincipal
