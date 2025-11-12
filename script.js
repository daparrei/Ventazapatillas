

//Mostar los producto en la página


// Seleccionamos el contenedor principal donde irán las secciones
const contenedorGaleria = document.getElementById("galeria");

// Función principal
async function inicializarPagina() {
  // Esperamos a que los productos se carguen
  await cargarProductos();

  // Obtenemos las categorías únicas del array
  const categorias = [...new Set(productos.map(p => p.categoria))];

  // Recorremos cada categoría y generamos su sección
  categorias.forEach(categoria => {
    // Creamos la sección
    const seccion = document.createElement("section");
    seccion.classList.add("galeria-categoria");

    // Título de la categoría
    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    seccion.appendChild(titulo);

    // Filtramos productos de esa categoría
    const productosCategoria = productos.filter(p => p.categoria === categoria);

    // Creamos cada tarjeta
    productosCategoria.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("galeria-categoria-zapitilla");
      div.id = p.nombre;
      div.id = p.id;

      div.innerHTML = `
        <a href="./pages/producto-detalle.html">
          <img src="./${p.imagen}" alt="${p.alt}">
        </a>
        <p class="galeria-categoria-zapitilla-nombre">Zapatilla ${p.nombre}</p>
        <p class="galeria-categoria-zapitilla-precio">$ ${p.precio.toLocaleString("es-AR")}</p>
        <p class="galeria-categoria-zapitilla-descripcion">${p.descripcion}</p>
        <a class="galeria-categoria-zapitilla-boton" href="./pages/producto-detalle.html">COMPRAR</a>
      `;

      seccion.appendChild(div);
    });

    // Agregamos la sección al contenedor
    contenedorGaleria.appendChild(seccion);
  });

  //Guardar el ID del producto seleccionado cuando se hace clic en el botón "Agregar al carrito"
  document.querySelectorAll('.galeria-categoria-zapitilla-boton').forEach(boton => {
      boton.addEventListener('click', (event) => {
          const productoId = event.target.parentElement.id;
          localStorage.setItem('productoSeleccionado', productoId);
      });
  });

};

// Llamamos a la función principal al cargar el script
inicializarPagina();




