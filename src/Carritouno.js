import React from 'react';

const Carritouno = ({ carritouno, agregarAlCarrito, eliminarElemento }) => {

  // Función para manejar la adición al carrito
  const manejarAgregarAlCarrito = (producto) => {
    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carritouno.some(item => item.id === producto.id);
    
    if (!productoEnCarrito) {
      agregarAlCarrito(producto);
    } else {
      alert('Este producto ya está en el carrito.');
    }
  };

  return (
    <div className="carrito-container">
      <h1 className='titulo_megusta'>Me gusta</h1>
      {carritouno.length === 0 ? (
        <p className='megusta_vacio'>Aquí puedes guardar las bolsas que más te gustaron</p>
      ) : (
        <div className='contenedor_productos_megusta'>
          {carritouno.map(producto => (
            <div key={producto.id} className='producto_megusta'>
              <img src={producto.imagenes[0]} alt="bolsas" className='producto_imagen_megusta' /> {/* Asegúrate de que producto.imagenes sea un array */}
              <div className='producto_texto_megusta'>
                <h3 className='producto_titulo_megusta'>{producto.titulo}</h3>
                <p className='producto_precio_megusta'>
                  ${Number(producto.precio).toFixed(2)}
                </p>
              </div>
              <button className='boton_trashdos' onClick={() => eliminarElemento(producto.id)}>
                <i className='bx bx-trash icono_basura'></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carritouno;

