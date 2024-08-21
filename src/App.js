import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header'; 
import Catalogo from './Catalogo'; 
import Carrito from './Carrito'; 
import Carritouno from './Carritouno'; 
import Contactos from './Contactos'; 
import DetalleProducto from './DetalleProducto'; 
import { productosarray  } from './CatalogoIndex'; // Asegúrate de que esta línea esté correcta

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [meGusta, setMeGusta] = useState([]);

  const agregarAlcarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const agregarAmegusta = (producto) => {
    setMeGusta([...meGusta, producto]);
  };

  const eliminarElemento = (id) => {
    setMeGusta(meGusta.filter(producto => producto.id !== id));
  };

  const eliminarElementocarrito = (id) => {
    setCarrito(carrito.filter(producto => producto.id !== id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<Catalogo agregarAlcarrito={agregarAlcarrito} agregarAmegusta={agregarAmegusta} />} 
        />
        <Route 
          path="/carrito" 
          element={<Carrito carrito={carrito} eliminarElementocarrito={eliminarElementocarrito}/>} 
        />
        <Route 
          path="/carritouno" 
          element={<Carritouno carritouno={meGusta} eliminarElemento={eliminarElemento} />} 
        />
        <Route 
          path="/contactos" 
          element={<Contactos />} 
        />
        <Route 
          path="/producto/:id" 
          element={<DetalleProducto productos={productosarray} />} 
        />     
      </Routes>
    </Router>
  );
};

export default App;
