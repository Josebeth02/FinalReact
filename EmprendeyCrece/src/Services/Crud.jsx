async function getProductos() {
    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

//////////LLAMADO POST//////////

async function postProductos(Producto,Precio,Descripcion,Imagen,Categoria) {
    try {
     
        const userData = { 
            Producto,
            Precio,
            Descripcion,
            Imagen,
            Categoria
        
        };



        const response = await fetch("http://localhost:3000/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////

async function updateProductos(id, data) {
    try {
      const response = await fetch(`http://localhost:3000/productos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        // Manejar errores HTTP
        const errorText = await response.text();
        throw new Error(`Error HTTP: ${response.status} - ${errorText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error update user:', error);
      throw error;
    }
  }



//////////////LLAMADO DELETE/////////////


async function deleteProductos(id) {
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default {getProductos, postProductos,deleteProductos,updateProductos,}