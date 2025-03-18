import React, { useState } from 'react'

import "../Style/PagPrincipal.css"


function PagPrincipal() {

  

  return (
    <div >
    
       <div className='segDiv'>
        <ul>
            <li className='li'>Emprende y Crece</li>
            <input className='buscar'  placeholder='Busca un producto' type="search" />
            {/*value={inputBucar} onChange={busqueda} */}
        </ul>
       </div>
       <div className='terDiv'>
        <ul>
            <li>OFERTAS</li>
            <li>ROPA DE DAMA</li>
            <li>ROPA DE CABALLERO</li>
            <li>ROPA DE NIÑO/A</li>
            <li>CALZADO</li>
            <li>ACCESORIOS</li>
            <li>MÁS</li>
        </ul>
       </div> 
       
       
       </div>
      
  )
}

export default PagPrincipal