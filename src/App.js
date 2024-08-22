import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header'; 
import Catalogo from './Catalogo'; 
import Carrito from './Carrito'; 
import Carritouno from './Carritouno'; 
import Contactos from './Contactos'; 
import DetalleProducto from './DetalleProducto'; 
import Formulario from './Formulario'; // Importa el componente Formulario
import { productosarray } from './CatalogoIndex';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [meGusta, setMeGusta] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      alert('Este producto ya está en el carrito.');
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarElementocarrito = (id) => {
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente.cantidad > 1) {
      setCarrito(carrito.map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ));
    } else {
      setCarrito(carrito.filter(item => item.id !== id));
    }
  };

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      eliminarElementocarrito(id);
    } else {
      setCarrito(carrito.map(item =>
        item.id === id
          ? { ...item, cantidad }
          : item
      ));
    }
  };

  const calcularTotalCarrito = () => {
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0).toFixed(2);
  };

  const agregarAmegusta = (producto) => {
    const productoExistente = meGusta.find(item => item.id === producto.id);
    if (!productoExistente) {
      setMeGusta([...meGusta, producto]);
    } else {
      alert('Este producto ya está en la lista de Me gusta.');
    }
  };

  const eliminarElemento = (id) => {
    setMeGusta(meGusta.filter(producto => producto.id !== id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<Catalogo agregarAlCarrito={agregarAlCarrito} agregarAmegusta={agregarAmegusta} />} 
        />
        <Route 
          path="/carrito" 
          element={<Carrito carrito={carrito} eliminarElementocarrito={eliminarElementocarrito} actualizarCantidad={actualizarCantidad} calcularTotalCarrito={calcularTotalCarrito} />} 
        />
        <Route 
          path="/carritouno" 
          element={<Carritouno carritouno={meGusta} agregarAlCarrito={agregarAlCarrito} eliminarElemento={eliminarElemento} />} 
        />
        <Route 
          path="/contactos" 
          element={<Contactos />} 
        />
        <Route 
          path="/producto/:id" 
          element={<DetalleProducto productos={productosarray} />} 
        />
        <Route 
          path="/formulario" 
          element={<Formulario carrito={carrito} total={calcularTotalCarrito()} />} // Ruta para el Formulario con total
        />     
      </Routes>
    </Router>
  );
};

export default App;
