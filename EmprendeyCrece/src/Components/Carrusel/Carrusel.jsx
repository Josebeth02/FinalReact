import React from 'react'
import ropaMujer from "../../imagenes/ropaMujer.jpg"
import hombre from "../../imagenes/hombre.jpg"
import niña from "../../imagenes/niña.avif"
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './Carrusel.css'


function Carrusel() {


  return (
<div>

<div>

<div className='carrusel-cont'>
<div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ropaMujer} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={hombre} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={niña} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={ropaMujer} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
</div>
</div>



 
  )
}
export default Carrusel