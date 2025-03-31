import React, {useState,useEffect} from 'react'
import Crud from '../../Services/Crud'
import Swal from 'sweetalert2'
import './Adm.css';

function Admin() {
 
  const[nombreProducto,setNombreProducto] = useState()
  const[valorPrecio,setValorPrecio] = useState()
  const[textDescripcion,setTextDescripcion] = useState()
  const[guardarProductos, setGuardarProductos] = useState([])
  const [imgs,setImgs] =useState()
  const[categoria, setCategoria] = useState()

   useEffect(() => {
  
        async function fetchDataUsers() {
            const dato = await Crud.getProductos()
            setGuardarProductos(dato)
        };
        fetchDataUsers()
    }, [])

    function producto(evento) {
      setNombreProducto(evento.target.value)
    }

    function precio(evento) {
      setValorPrecio(evento.target.value)
  }

  function descripcion(evento) {
    setTextDescripcion(evento.target.value)
}

//agregar el producto
async function btnEnviar() {
  const productoNew= await Crud.postProductos(nombreProducto, valorPrecio, textDescripcion, imgs)
  setGuardarProductos([...guardarProductos,productoNew])
  Swal.fire({
          title: "Se agrego el producto correctamente!",
          icon: "success",
          draggable: true
        });
    }


 
    //hacerle la funcionalidad
function btnComprar() {
  console.log("Voy a comprar este producto");
}



//eliminar
async function btnEliminar(id) {
  const result = await Swal.fire({
    title: "¿Quieres eliminar este producto?",
    text: "No se oidra recuperar",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Conservar el Producto",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar Producto"
  });

  if (result.isConfirmed) {
    try {
      await Crud.deleteProductos(id); 
      const articulos = await Crud.getProductos(); 
      setGuardarProductos(articulos); 
      Swal.fire({
        title: "Eliminado",
        text: "El producto ha sido eliminado",
        icon: "success"
      });
    } catch (error) {
      console.error('Error eliminando el producto:', error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al eliminar el producto.",
        icon: "error"
      });
    }
  }
}




//editar
async function Editar(id) {
  const EditarProducto = guardarProductos.find((producto) => producto.id === id); 
  if (!EditarProducto) {
    Swal.fire('Error', 'Producto no encontrado', 'error');
    return;
  }
  const { value: formValues } = await Swal.fire({
    title: 'Editar Producto',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nombre del producto" value="${EditarProducto.Producto || ''}">
      <input id="swal-input2" class="swal2-input" type="number" placeholder="Precio del producto" value="${EditarProducto.Precio || ''}">
      <input id="swal-input3" class="swal2-input" placeholder="Descripción del producto" value="${EditarProducto.Descripcion || ''}">
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const nombre = document.getElementById('swal-input1').value;
      const precio = document.getElementById('swal-input2').value;
      const descripcion = document.getElementById('swal-input3').value;
      const Imagen = EditarProducto.Imagen; //a 
      if (!nombre || !precio || !descripcion) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return null;
      }
      return { nombre, precio, descripcion, Imagen };  //a
    },
  });
  if (formValues) {
    try {
     
      console.log(formValues); //a
      
      await Crud.updateProductos(id, formValues);
      setGuardarProductos(
        guardarProductos.map((producto) =>
          producto.id === id
            ? { ...producto, Producto: formValues.nombre, Precio: formValues.precio, Descripcion: formValues.descripcion }
            : producto
        )
      );
      Swal.fire('Actualizado', 'El producto ha sido actualizado.', 'success');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      Swal.fire('Error', 'No se pudo actualizar el producto.', 'error');
    }
  }
}
const btnEditar = (id) => {
  Editar(id); 
};


const handleChnage=(e)=>{
  console.log(e.target.files);
  const data = new FileReader()
  data.addEventListener('load',()=>{
    setImgs(data.result)
  })
  data.readAsDataURL(e.target.files[0])
}
console.log(imgs);

const categ = (e) => {
  const postProductos = categoria.filer((i) => i.Categoria === e.target.value)
  setCategoria(postProductos);
  console.log(postProductos);
}


  return (

    <div>

      <div className='td'>
      <div id='divForm'>
        <h1>Edición de Productos</h1>
        <label>Nombre del Producto</label> 
        <input placeholder='Nombre del Producto' value={nombreProducto} onChange={producto} type="text" /> 
        <label >Precio</label>
        <input placeholder='Precio' value={valorPrecio} onChange={precio} type="text" />
        <label>Categoría</label>
        <select id="Categoria" name="Categoria" onChange={producto}>
          <option value="Dama">Dama</option>
          <option value="Caballero">Caballero</option>
          <option value="Niños">Niños</option>
          <option value="Accesoios">Accesoios</option>
        </select>
        <label>Descripción</label>
        <input placeholder='Descripción' value={textDescripcion} onChange={descripcion} type="text" />

        <input type="file" onChange={handleChnage} />
        <img src={imgs} height="200px" width="200px"/>


        <button className='button' onClick={btnEnviar}>Enviar</button>
      </div>

      <table className='inventory-table'>
            <tr>
              <th>Nombre del Producto</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Eliminar/Editar</th>
            </tr>
            {guardarProductos.map((ropa) => (
              <tr key={ropa.id}>
                <td>{ropa.Producto}</td>
                <td>{ropa.Precio}</td>
                <td>{ropa.Descripcion}</td>
                <td><img src={ropa.Imagen} height='50' alt='Producto' /></td>
                <td>
                  <button className='button' onClick={() => btnEliminar(ropa.id)}>Eliminar</button>
                  <button className="button" onClick={() => btnEditar(ropa.id)}>Editar</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
      </div>
  );
}

export default Admin
