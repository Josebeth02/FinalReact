import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <h1 className='rs'>RopaShop</h1>
        </div>
            <ul className='nav-links'>
              <h3><Link to="/">Inicio</Link></h3>
              <h3><Link to="/informacionPag">Información de la página</Link></h3>
              <h3><Link to="/contactoPag">Contacto</Link></h3>
            </ul>
        <div className='search-cart'>
            <p> <Link to="/register">👤</Link></p>
            <input type='text' placeholder='Buscar...' className='search-box' />
            <button className='cart-button'> <Link to="/carro">🛒</Link> </button>
       </div>
    </nav>
  );
}

export default Navbar;

  