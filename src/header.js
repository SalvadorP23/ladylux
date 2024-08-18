import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './index.css'; // Asegúrate de que este archivo esté en el directorio correcto
import Logo from './imgs/Logo.png';
import HeaderOption from './HeaderOption'; // Asegúrate de que el archivo se llame HeaderOption.js

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (event, id) => {
    event.preventDefault();
    navigate('/', { state: { scrollTo: id } });
  };

  return (
    <header>
      <nav>
        <ul className='barra_menu'>
          <div className="izquierda">
            <img src={Logo} alt="Logo" className='logo' />
          </div>
          <div className="menu_contenedor">
            <div className="centrado">
              <li className='menu_elementos'>
                <a className='centro' href="#header1" onClick={(e) => scrollToSection(e, 'header1')}>Inicio</a>
              </li>
              <li className='menu_elementos'>
                <a href="#productos" onClick={(e) => scrollToSection(e, 'productos')}>Catálogo</a>
              </li>
              <li className='sobre_nosotros'><Link to="/sobre-nosotros">Sobre nosotros</Link>
              </li>
              <HeaderOption 
                label="Contactos"
              />
            </div>
          </div>
          <div className="derecha">
            <li className='iconos_barra2'>
              <Link to="/carrito">
                <i className='bx bx-cart'></i>
              </Link>
            </li>
            <li className='iconos_barra'>
              <Link to="/carritouno">
                <i className='bx bx-heart'></i>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
