// src/HeaderOption.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Asegúrate de que este archivo esté en el directorio correcto

const HeaderOption = ({ label, link, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <li 
      className='menu_elementos header-option'
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <Link to={link}>{label}</Link>
      {showInfo && (
        <div className="info-window">

          <div className="button-container"> {/* Contenedor para los botones dentro de info-window */}

            <div className='contacto_fila'>
            <button className='boton_contactos' >
            <i class='bx bxl-facebook-circle' ></i>            
            </button>
            <div className='texto_contactos'>Facebook</div>
            </div>

            <div className='contacto_fila'>
            <button className='boton_contactos' >
            <i class='bx bxl-whatsapp' ></i>            
            </button>
            <div className='texto_contactos'>Whatsapp</div>
            </div>

            <div className='contacto_fila'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <button className='boton_contactos'>
            <i class='bx bxl-instagram-alt' ></i>            
            </button>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <div className='texto_contactos'>Instagram</div>
            </a>
            </div>

            <div className='contacto_fila'>
            <button className='boton_contactos' >
            <i class='bx bx-phone'></i>           
            </button>
            <div className='texto_contactos'>618-112-06-80</div>
            </div>

          </div>
        </div>
      )}
    </li>
  );
};

export default HeaderOption;
