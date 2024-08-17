
const contenedor_Productos = document.querySelector("#contenedor_productos");

function cargarProductos() {
  productosarray.forEach(producto => { // Cambiado `productos` a `productosarray` para coincidir con tu nombre de variable

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <div class="imagen_contenedor">
        <img src="${producto.imagen}" alt="${producto.titulo}" class="producto_imagen" />
        <button class="boton_carrito" id="${producto.id}">
          <i class="bx bx-cart bx-cart_producto"></i>
        </button>
          <button class="boton_carrito" id="${producto.id}">
        <i class="bx bx-cart bx-cart_producto"></i>
        </button>
      </div>
      <div class="contenedor_productos_texto">
        <div class="columna_producto">
          <h3 class="producto_titulo">${producto.titulo}</h3>
          <p class="color_producto">${producto.color}</p>
        </div>
        <p class="producto_precio">${producto.precio}</p>
      </div>
    `;
    contenedor_Productos.append(div);
  });
}

cargarProductos();

