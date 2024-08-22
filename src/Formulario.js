import React, { useState } from 'react';

const Formulario = ({ carrito, total }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formUrl = 'https://script.google.com/macros/s/AKfycbx6mpyqU3uMZL4QauWXkxh0tu4JF8fwcm5wmoCQya7RUn6wqWSuSnU7pUNsDobmpmci/exec'; // Reemplaza con el URL del Web App

    const productos = carrito.map(producto => (
      `${producto.titulo} (${producto.cantidad} x $${Number(producto.precio).toFixed(2)})`
    )).join('; ');

    const formDataToSubmit = new URLSearchParams({
      'nombre': formData.nombre,
      'email': formData.email,
      'direccion': formData.direccion,
      'productos': productos,
      'total': total
    }).toString();

    fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formDataToSubmit
    })
    .then(response => response.text())
    .then(result => {
      alert(result);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar el formulario');
    });
  };

  return (
    <div className='formulario'>
      <h1>Formulario de Compra</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Número de Teléfono:
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </label>
        <div className='productos_carrito_modal'>
          <h2>Productos en el carrito:</h2>
          {carrito.map(producto => (
            <div key={producto.id} className='producto_modal'>
              <img 
                src={producto.imagenes[0]} 
                alt={producto.titulo || 'Producto'} 
                className='producto_imagen_modal' 
              />
              <div>
                <h3>{producto.titulo || 'Título no disponible'}</h3>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio: ${Number(producto.precio).toFixed(2)}</p>
                <p>Subtotal: ${(Number(producto.precio) * producto.cantidad).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='total_carrito'>
          <h2>Total: ${total}</h2>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
