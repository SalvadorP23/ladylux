import bolsa01 from './imgs/productos/bolsa-01.png';
import bolsa02 from './imgs/productos/bolsa-02.png';
import bolsa03 from './imgs/productos/bolsa-03.png';
import bolsa04 from './imgs/productos/bolsa-04.png';
import bolsamano01 from './imgs/productos/bolsamano-01.png';
import bolsamano02 from './imgs/productos/bolsamano-02.png';
import bolsamano03 from './imgs/productos/bolsamano-03.png';
import bolsamano04 from './imgs/productos/bolsamano-04.png';
import bolsanina01 from './imgs/productos/bolsanina-01.png';
import bolsanina02 from './imgs/productos/bolsanina-02.png';
import bolsanina03 from './imgs/productos/bolsanina-03.png';
import bolsanina04 from './imgs/productos/bolsanina-04.png';
import Izquierda from './imgs/productos/Izquierda.png';
import Derecha from './imgs/productos/Derecha.png';
import Trasera from './imgs/productos/Trasera.png';

export const productosarray = [
    { 
      id: "bolsa-01", 
      titulo: "Bolsa Ale", 
      imagenes: [bolsa01, Izquierda, Derecha, Trasera], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mujer" }, 
      precio: "$350", 
      descripcion: "Nuestra bolsa de mujer combina estilo y funcionalidad en un diseño sofisticado. Fabricada con materiales de alta calidad, ofrece una durabilidad excepcional y un toque de lujo. Su amplio compartimento principal es perfecto para llevar todos tus esenciales diarios, mientras que los bolsillos internos te permiten organizar pequeños accesorios con facilidad. El diseño moderno y las líneas elegantes se adaptan a cualquier ocasión, desde una salida casual hasta eventos más formales. Disponible en una variedad de colores y texturas, esta bolsa es el complemento ideal para realzar tu atuendo y mantenerte organizada. Con asas robustas y un diseño ergonómico, disfrutarás de comodidad y practicidad en cada uso. ¡Hazla tuya y añade un toque de elegancia a tu estilo diario!" 
    },
    { 
      id: "bolsa-02", 
      titulo: "Bolsa 02", 
      imagenes: [bolsa02,bolsa01, Izquierda, Derecha, Trasera], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mujer" }, 
      precio: "$250", 
      descripcion: "Nuestra bolsa de mujer combina estilo y funcionalidad en un diseño sofisticado. Fabricada con materiales de alta calidad, ofrece una durabilidad excepcional y un toque de lujo. Su amplio compartimento principal es perfecto para llevar todos tus esenciales diarios, mientras que los bolsillos internos te permiten organizar pequeños accesorios con facilidad. El diseño moderno y las líneas elegantes se adaptan a cualquier ocasión, desde una salida casual hasta eventos más formales. Disponible en una variedad de colores y texturas, esta bolsa es el complemento ideal para realzar tu atuendo y mantenerte organizada. Con asas robustas y un diseño ergonómico, disfrutarás de comodidad y practicidad en cada uso. ¡Hazla tuya y añade un toque de elegancia a tu estilo diario!" 
    },
    { 
      id: "bolsa-03", 
      titulo: "Bolsa 03", 
      imagenes: [bolsa03, bolsa01, Izquierda, Derecha, Trasera], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mujer" }, 
      precio: "$250",
      descripcion: "Nuestra bolsa de mujer combina estilo y funcionalidad en un diseño sofisticado. Fabricada con materiales de alta calidad, ofrece una durabilidad excepcional y un toque de lujo. Su amplio compartimento principal es perfecto para llevar todos tus esenciales diarios, mientras que los bolsillos internos te permiten organizar pequeños accesorios con facilidad. El diseño moderno y las líneas elegantes se adaptan a cualquier ocasión, desde una salida casual hasta eventos más formales. Disponible en una variedad de colores y texturas, esta bolsa es el complemento ideal para realzar tu atuendo y mantenerte organizada. Con asas robustas y un diseño ergonómico, disfrutarás de comodidad y practicidad en cada uso. ¡Hazla tuya y añade un toque de elegancia a tu estilo diario!" 
    },
    { 
      id: "bolsa-04", 
      titulo: "Bolsa 04", 
      imagenes: [bolsa04], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mujer" }, 
      precio: "$250" 
    },
    // Bolsas mano
    { 
      id: "bolsamano-01", 
      titulo: "Bolsa de mano 01", 
      imagenes: [bolsamano01], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mano" }, 
      precio: "$250" 
    },
    { 
      id: "bolsamano-02", 
      titulo: "Bolsa de mano 02", 
      imagenes: [bolsamano02], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mano" }, 
      precio: "$250" 
    },
    { 
      id: "bolsamano-03", 
      titulo: "Bolsa de mano 03", 
      imagenes: [bolsamano03], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mano" }, 
      precio: "$250" 
    },
    { 
      id: "bolsamano-04", 
      titulo: "Bolsa de mano 04", 
      imagenes: [bolsamano04], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsa_mano" }, 
      precio: "$250" 
    },
    // Bolsas de niña
    { 
      id: "bolsanina-01", 
      titulo: "Bolsa de niña 01", 
      imagenes: [bolsanina01], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsas_nina" }, 
      precio: "$250" 
    },
    { 
      id: "bolsanina-02", 
      titulo: "Bolsa de niña 02", 
      imagenes: [bolsanina02], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsas_nina" }, 
      precio: "$250" 
    },
    { 
      id: "bolsanina-03", 
      titulo: "Bolsa de niña 03", 
      imagenes: [bolsanina03], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsas_nina" }, 
      precio: "$250" 
    },
    { 
      id: "bolsanina-04", 
      titulo: "Bolsa de niña 04", 
      imagenes: [bolsanina04], // Cambiado de 'imagen' a 'imagenes'
      color: "blanco", 
      categoria: { nombre: "bolsa", id: "bolsas_nina" }, 
      precio: "$250" 
    },
  ];
