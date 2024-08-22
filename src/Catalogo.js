import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import bolsaheader from './imgs/productos/bolsa-04.png';
import { productosarray } from './CatalogoIndex'; // Importando productosarray

const Catalogo = ({ agregarAlCarrito, agregarAmegusta }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [seleccionado, setSeleccionado] = useState('Todas'); // Estado para botón seleccionado
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const filtrarProductos = () => {
    if (categoriaSeleccionada === 'Todas') {
      return productosarray;
    }
    return productosarray.filter(producto => producto.categoria.id === categoriaSeleccionada);
  };

  const manejarFiltro = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setSeleccionado(categoria); // Actualiza el estado del botón seleccionado
  };

  const productosFiltrados = filtrarProductos();

  return (
    <main>
      <div id="header1" className='header1'>
        <div className='div_imagen_header'>
          <img src={bolsaheader} alt="bolsas" />
        </div>
        <div className='promocion'>
          <p className='nuevas'>Nuevas</p>
          <p className='bolsas'>bolsas</p>
          <div className="columna_header">
            <p className='por_solo'>por solo</p>
            <p className='precio'>$250</p>
            <span className="numero_superior">00</span>
          </div>
        </div>
      </div>

      <div className="filtro_contenedor">
        <ul className="filtro_ul">
          <li><button className={`boton_filtro ${seleccionado === 'Todas' ? 'activo' : ''}`} onClick={() => manejarFiltro('Todas')}>Todas</button></li>
          <li><button className={`boton_filtro ${seleccionado === 'bolsa_mujer' ? 'activo' : ''}`} onClick={() => manejarFiltro('bolsa_mujer')}>Mujeres</button></li>
          <li><button className={`boton_filtro ${seleccionado === 'bolsa_mano' ? 'activo' : ''}`} onClick={() => manejarFiltro('bolsa_mano')}>Mano</button></li>
          <li><button className={`boton_filtro ${seleccionado === 'bolsas_nina' ? 'activo' : ''}`} onClick={() => manejarFiltro('bolsas_nina')}>Niña</button></li>
        </ul>
      </div>

      <div id="contenedor_productos" className="contenedor_productos">
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="producto" id="productos">
            <Link to={`/producto/${producto.id}`} className="producto-link">
              <div className="imagen_contenedor">
                <img src={producto.imagenes[0]} alt={producto.titulo} className="producto_imagen" />
                <button className="boton_carrito" onClick={(e) => { 
                    e.preventDefault();
                    agregarAlCarrito(producto); // Asegúrate de usar el nombre correcto del prop
                }}>
                  <i className="bx bx-cart bx-cart_producto_carrito"></i>
                </button>
                <button className="boton_megusta" onClick={(e) => {
                    e.preventDefault();
                    agregarAmegusta(producto);
                }}>
                  <i className="bx bx-heart bx-cart_producto_corazon"></i>
                </button>
              </div>
              <div className="contenedor_productos_texto">
                <div className="columna_producto">
                  <h3 className="producto_titulo">{producto.titulo}</h3>
                  <p className="color_producto">{producto.color}</p>
                </div>
                <p className="producto_precio">{producto.precio}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalogo;
