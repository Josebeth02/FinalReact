import React from 'react'
import './InfoP.css';
import { Link } from 'react-router-dom'

function InfoPagina() {
  return (

    <div className="info-container">
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
    <div className="info-header">
      <h1>Sobre Emprende y Crece</h1>
      </div>
      <div className="info-content"> 
      <h2>Fundado en 2025 con una Visión Clara</h2>
      <p>
        <strong>Emprende y Crece</strong> nació en el año 2025 con la misión de inspirar y apoyar a emprendedores 
        que desean convertir sus ideas en negocios exitosos. Fue creado por un grupo de visionarios apasionados 
        por el crecimiento personal y profesional, con la firme convicción de que cada persona tiene el potencial 
        de alcanzar el éxito con el conocimiento y las herramientas adecuadas.
      </p>
      <h3 className="info-subtitle">¿Quiénes Somos?</h3>
      <p>
        Somos una comunidad comprometida con el desarrollo de emprendedores de todas las áreas. 
        Nos enfocamos en compartir experiencias, estrategias y consejos prácticos para que cada 
        persona pueda crecer y evolucionar en su camino empresarial.
      </p>
      <h3 className="info-subtitle">Nuestra Filosofía</h3>
      <ul className="info-list">
        <li>Fomentamos una comunidad de apoyo y colaboración.</li>
        <li>Impulsamos la innovación y el crecimiento continuo.</li>
        <li>Inspiramos a las personas a transformar sus ideas en realidad.</li>
      </ul>
      <p className="info-footer">
        En <strong>Emprende y Crece</strong>, cada historia de éxito nos motiva a seguir adelante. 
        Nos emociona ser parte de tu camino y brindarte el apoyo necesario para que alcances tus metas. 
        ¡Juntos construimos el futuro del emprendimiento!
      </p>
      </div> 
    </div>
    );
    }

export default InfoPagina



