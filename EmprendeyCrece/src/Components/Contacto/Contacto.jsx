import React from 'react'
import './Contact.css';
import tel from '../../imagenes/tel.svg'
import person from '../../imagenes/person.jpg'
import { Link } from 'react-router-dom'

function Contacto() {
  return (
   
    <div className="contact-page">
       <nav className='navbar'>
                    <div className='logo'>
                        <h1 className='rs'>RopaShop</h1>
                    </div>
                        <ul className='nav-links'>
                          <h3><Link to="/">Inicio</Link></h3>
                          <h3><Link to="/informacionPag">Información de la página</Link></h3>
                          <h3><Link to="/contactoPag">Contacto</Link></h3>
                        </ul>
                </nav>
          
              <div className="contacto">
                  <h1>Contáctanos</h1>
                  <p>¡Estamos aquí para ayudarte! Si tienes alguna duda o comentario, no dudes en ponerte en contacto con nosotros.</p>
    
              <div className="formulario">
                      
                          <label ><img className='imgIcons' src={person} alt="" /> Nombre</label> <br />
                          <input className='nombre' placeholder='Nombre' type="text" />
                          {/*value={nombrejeUsuario} onChange={nombre}*/}
                          <label ><img className='imgIcons' src={tel} alt="" /> Email</label>
                          <input className='email' placeholder='Email' type="text" />
                          {/*value={emailUsuario} onChange={email}*/}
                          <label htmlFor="mensaje">Mensaje:</label> <br />
                          <input className='mensaje' placeholder='Mensaje' type="text" />
                          {/*value={mensajeUsuario} onChange={mensaje}*/} <br />
                          <button type="submit">Enviar</button>
                  </div>
    
                  <div className="informacion">
                      <h2>Información de contacto</h2>
                     <p>Correo electrónico: emprendeycrece123@gmail.com</p>
                     <p>Teléono: 6361 7621</p>
                     <p>Dirección: Esparza, Puntarenas, CR</p>
                     
                  </div>
                  </div>
    
              <footer>
                  <p className='pFoo'> 2025 Emprende y Crece. Todos los derechos reservados.</p>
              </footer>
          </div>
      );
    };

export default Contacto



