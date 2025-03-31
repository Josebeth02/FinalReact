//import React, { useState } from 'react'
import React from 'react'
import "./PagPrincipal.css"
import { Link } from 'react-router-dom'


function PagPrincipal() {  

  return (
    <div >
    
       <div className='segDiv'> </div>
          <div className='terDiv'>
             <ul className='categorias'>
                {/*<li>Ofertas <link rel="/Ofertas" href="" /></li>*/}
                <li><Link to="/dama">Dama</Link></li>
                <li><Link to="/caballero">Caballero</Link></li>
                <li><Link to="/niños">Niños</Link></li>
                <li><Link to="/accesorios">Accesorios</Link></li>
             </ul>
         </div> 
       
       </div>
      
  )
}

export default PagPrincipal