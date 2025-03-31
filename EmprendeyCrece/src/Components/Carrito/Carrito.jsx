import React, {useState, useEffect} from 'react'


function Carrito() {

  const[productosC, setProductosC] = useState([])

  useEffect(() => {
    async function fetchDataUsers() {
      const carrito  = await JSON.parse(localStorage.getItem("carrito"))
      setProductosC(carrito)
    };
          fetchDataUsers()
  }, [])



console.log(productosC);


const eliminarProducto = (i) => {
  const updatedProductos = productosC.filter((_, index) => index !== i);
  setProductosC(updatedProductos);  
  localStorage.setItem("carrito", JSON.stringify(updatedProductos))
  console.log("Producto eliminado")
  Swal.fire({
    title: "Se elimino correctamente!",
    icon: "success",
    draggable: true
  });
}

  return (
    <div className='container'>
      <h1 className='new'>Carrito de Compras</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Imagen</th>
          </tr>
        </thead>
        

        <tbody>
  {productosC.map((producto, i) => (
    <tr key={i}>
      <td>{producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>{producto.descripcion}</td>
      <td>{producto.categoria} </td>
      <td>
        <button onClick={() => eliminarProducto(i)}>Eliminar</button>
      </td>
    </tr>
  ))}
</tbody>

    </table>
    </div>
  )
}

export default Carrito