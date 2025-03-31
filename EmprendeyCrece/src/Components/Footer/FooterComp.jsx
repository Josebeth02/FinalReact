import React from 'react';
import './Foot.css';
import { Link } from 'react-router-dom'

function FooterComp() {
  return (
    <footer className='footer-container'> 
  
      <div className='footer-section'>
        <h2>Tienda</h2>
        <ul className='catg'>
          <li><Link to="/dama">Dama</Link></li>
          <li><Link to="/caballero">Caballero</Link></li>
          <li><Link to="/niños">Niños</Link></li>
          <li><Link to="/accesorios">Accesorios</Link></li>
        </ul>
      </div>
      <div className='footer-section'>
        <h2>Compañía</h2>
        <ul className='catg'>
          <li>Teléfono: 6361 7621</li>
          <li>Correo electrónico: emprendeycrece123@gmail.com</li>
          <li> Dirección: Esparza, Puntarenas, CR</li>
        </ul>
      </div>
      <div className='footer-section'>
        <h2>Síguenos</h2>
        <ul>
          <li>Facebook<link rel="" href="https://www.facebook.com" /></li>
          <li>Instagram<link rel="stylesheet" href="https://www.instagram.com" /></li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComp;



