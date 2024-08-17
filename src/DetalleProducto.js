import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productosarray } from './CatalogoIndex'; // Importa el catálogo

const DetalleProducto = () => {
  const { id } = useParams();
  const producto = productosarray.find(p => p.id === id); // Usa productosarray en lugar de productos
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manejo del caso en el que el producto no es encontrado
  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  // Función para mover al slide anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + producto.imagenes.length) % producto.imagenes.length
    );
  };

  // Función para mover al siguiente slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % producto.imagenes.length
    );
  };

  return (
    <div className="detalle-producto">
      <Carousel
        showThumbs={false} // Ocultar thumbnails
        selectedItem={currentIndex} // Imagen seleccionada
        onChange={(index) => setCurrentIndex(index)} // Actualizar índice
        showStatus={false} // Ocultar estado
        showArrows={false} // Ocultar flechas del carrusel predeterminadas
      >
        {producto.imagenes.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <i 
              className='bx bxs-chevron-left carousel-button-prev' 
              onClick={handlePrev}
            ></i>
            <img 
              src={image} 
              className="detalle-producto-imagen" 
              alt={producto.titulo} 
            />
            <i 
              className='bx bxs-chevron-right carousel-button-next' 
              onClick={handleNext}
            ></i>
          </div>
        ))}
      </Carousel>
      <div className="detalle-producto-texto">
        <h2 className="detalle-producto-titulo">{producto.titulo}</h2>
        <p className="detalle-producto-descripcion">{producto.descripcion}</p>
        <p className="detalle-producto-color">Color: {producto.color}</p>
        <p className="detalle-producto-precio">Precio: {producto.precio}</p>
      </div>
    </div>
  );
};

export default DetalleProducto;

