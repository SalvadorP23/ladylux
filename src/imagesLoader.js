// src/imagesLoader.js
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };
  
  // Cambia './imgs/Bolsas-mochilas' a la ruta correcta a tu directorio de imágenes
  const images = importAll(require.context('./imgs/Bolsas-mochilas', true, /\.(png|jpe?g|svg)$/));
  
  export default images;