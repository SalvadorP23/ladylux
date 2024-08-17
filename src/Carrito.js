import React from 'react';

const Carrito = ({ carrito, eliminarElementocarrito }) => {
  return (
    <div>
      <h1 className='titulo_megusta'>Carrito de compras</h1>

      {carrito.length === 0 ? (
        <p className='carrito_vacio'>Lo siento, el carrito está vacío</p>
      ) : (
        <div className='contenedor_productos_carrito'>
          {carrito.map(producto => (
            <div key={producto.id} className='producto_carrito'>
              <div className='contenedor_productos_texto_carrito'>
                <img 
                  img src={producto.imagenes[0]}
                  alt={producto.titulo || 'Producto'} 
                  className='producto_imagen_carrito' 
                />
                <div className='fila_producto_carrito'>
                  <div>
                    <h3 className='producto_titulo_carrito_producto'>Título</h3>
                    <h3 className='producto_titulo_carrito'>{producto.titulo || 'Título no disponible'}</h3>
                  </div>
                  <div>
                    <p className='color_producto_carrito'>Cantidad</p>
                    <p className='color_producto_carrito'>5</p>
                  </div>
                  <div>
                    <p className='producto_precio_carrito'>Precio</p>
                    <p className='producto_precio_carrito'>{producto.precio || 'Precio no disponible'}</p>
                  </div>
                  <div>
                    <p className='producto_precio_carrito'>Total</p>
                    <p className='producto_precio_carrito_precio'>$250.00</p>
                  </div>
                  <button className="boton_trashdos" onClick={() => eliminarElementocarrito(producto.id)}>
                    <i className='bx bx-trash icono_basura'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrito;


