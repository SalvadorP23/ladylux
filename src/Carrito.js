import React from 'react';
import { useNavigate } from 'react-router-dom';

const Carrito = ({ carrito, eliminarElementocarrito, actualizarCantidad, calcularTotalCarrito }) => {
  const navigate = useNavigate(); // Hook para la navegación

  const manejarCompraAhora = () => {
    navigate('/formulario'); // Redirige al formulario
  };

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
                  src={producto.imagenes[0]}
                  alt={producto.titulo || 'Producto'} 
                  className='producto_imagen_carrito' 
                />
                <div className='fila_producto_carrito'>
                  <div>
                    <h3 className='producto_titulo_carrito'>{producto.titulo || 'Título no disponible'}</h3>
                  </div>
                  <div>
                    <button 
                      className='boton_menos' 
                      onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                    >
                      -
                    </button>
                    <input 
                      type="text" 
                      value={producto.cantidad} 
                      readOnly 
                      className='input_cantidad_carrito'
                    />
                    <button 
                      className='boton_mas' 
                      onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className='producto_precio_carrito'>Precio</p>
                    <p className='producto_precio_carrito'>
                      ${Number(producto.precio).toFixed(2) || 'Precio no disponible'}
                    </p>
                  </div>
                  <div>
                    <p className='producto_precio_carrito'>Subtotal</p>
                    <p className='producto_precio_carrito_precio'>
                      ${ (Number(producto.precio) * producto.cantidad).toFixed(2) }
                    </p>
                  </div>
                  <button 
                    className="boton_trashdos" 
                    onClick={() => eliminarElementocarrito(producto.id)}
                  >
                    <i className='bx bx-trash icono_basura'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Botón de total, fuera del map */}
          <div className='contenedor_total_carrito'>
            <div className='botontotalcarrito'>
              Total: ${calcularTotalCarrito()}
            </div>
            <button className='botoncomprarahora' onClick={manejarCompraAhora}>
              Comprar ya
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
