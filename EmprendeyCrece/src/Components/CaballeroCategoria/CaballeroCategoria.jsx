import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom' 
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Card, Badge, Button } from "react-bootstrap"
import Nav from '../Nav/Nav'
import Crud from '../../Services/Crud'

import "./CaballeroCategoria.css"
function CaballeroCategoria() {

const[productosC, setProductosC] = useState([]);
const[carrito, setCarrito] = useState(() => {
  const carrito = localStorage.getItem("carrito");
  return carrito ? JSON.parse(carrito) : [];
});

useEffect(() => {
 const fetchProductos = async () => {
  try {
    const fetchProductos = await Crud.getProductos();
    setProductosC(fetchProductos);
    console.log("Productos obtenidos:", fetchProductos);
  } catch (error) {
    console.error("Error al agregar el producto:", error);
  }
}
fetchProductos();
}
, []);

const agregarAlCarrito = (producto) => {
  const nuevoCarrito = [...carrito, producto]
  setCarrito(nuevoCarrito)
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  console.log("Producto agregado al carrito:", producto);

}
  


  return (
    
    <div>

      <Nav></Nav>


            <h1 className='new'>Ropa de Caballero</h1>
                 <div className='cards'>

           
                              {productosC.map((producto) => (

                              <React.Fragment key={producto.id}>
                                <Card className='itemCard'>
                                  <Card.Header >
                                  <td><img className='imm' src={producto.Imagen}  /></td>
                                    <Badge></Badge>
                                  </Card.Header>

                                  <Card.Body>
                                    <Card.Title>{producto.precio}</Card.Title>
                                    <Button onClick={() => agregarAlCarrito(producto)}>Comprar</Button>
                                  </Card.Body>
                                </Card>
                              </React.Fragment>)
                              )}

              </div>
    </div>
  )
}

export default CaballeroCategoria

