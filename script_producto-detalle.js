// Recuperamos el ID guardado en localStorage al hacer click en el botón
const idZapatilla = localStorage.getItem("productoSeleccionado");

// Función principal
async function inicializarDetalleProducto() {
  // Si el array está vacío, primero cargamos los productos
  if (productos.length === 0) {
    await cargarProductos();
  }


  // Buscamos el producto correspondiente en el array
  const producto = productos.find(p => p.id == idZapatilla);

  // Verificamos si se encontró el producto
  if (!producto) {
    console.error("No se encontró el producto seleccionado");
  } else {
    // Seleccionamos los contenedores del HTML
    const contenedorImagenes = document.querySelector(".producto-datalle-imagenes");
    const contenedorInfo = document.querySelector(".producto-datalle-info");

    // Generamos el bloque de imágenes
    contenedorImagenes.innerHTML = `
      <p>${producto.categoria}/${producto.nombre}</p>
      <img src="../${producto.imagen}" alt="${producto.alt}">
      `;

    // Generamos el bloque de información
    contenedorInfo.innerHTML = `
      <h2>Zapatillas Topper</h2>
      <p>Modelo: ${producto.nombre}</p>
      <p>Descripción: ${producto.descripcion}</p>
      <p class="producto-datalle-precio">$${producto.precio.toLocaleString("es-AR")}</p>

      <div class="producto-datalle-talles">
        <strong>Talles disponibles:</strong>
          <br>
        ${producto.talle.map(t => `<span>${t}</span>`).join("")}
          <br>
        <button id="btnAgregarCarrito"  >Agregar al carrito</button>
        <a href="../pages/carrito-compras.html"  >Finalizar compra</a> 
      </div>
    `;

    //Cambiar de color el talle seleccionado
    const talles = document.querySelectorAll('.producto-datalle-talles span'); 
    talles.forEach(talle => {
        talle.addEventListener('click', () => {
            talles.forEach(t => t.classList.remove('seleccionado')); 
            talle.classList.add('seleccionado'); 
        });
    }); 

    //Guardar el talle seleccionado en localStorage
    talles.forEach(talle => {
        talle.addEventListener('click', () => { 
            const talleSeleccionado = talle.textContent;
            localStorage.setItem('talleSeleccionado', talleSeleccionado);
        }
        );
    });
    
    //Guardar el talle y el producto en el localStorage "carrito" al hacer click en "Agregar al carrito"
    //const botonAgregarCarrito = contenedorInfo.querySelector('a[href="../pages/producto-detalle.html"]');
    
    const botonAgregarCarrito = document.getElementById('btnAgregarCarrito');

    botonAgregarCarrito.addEventListener('click', (event) => {

        event.preventDefault(); // Evita recargar o perder el estado

        const talleSeleccionado = localStorage.getItem('talleSeleccionado');
        if (!talleSeleccionado) {

            // Si no se seleccionó talle, mostrar alerta con toastify   
            Toastify({
              text: "⚠️ Por favor, seleccione un talle antes de agregar al carrito.",
              } 
            ).showToast();
            //lert('Por favor, seleccione un talle antes de agregar al carrito.');
            return;
        } 
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            talle: talleSeleccionado,
            cantidad: 1
        });
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Mostrar una notificación de que el producto fue agregado al carrito con tostify.js
        Toastify({
          text: "✅ Producto agregado al carrito",
          duration: 3000,
          gravity: "top",
          position: "right",
          close: true,
          backgroundColor: "#333"
          //style: {
          //  background: "linear-gradient(to right, #00b09b, #96c93d)",
          //  zIndex: 9999999,
          //  borderRadius: "10px"
          //}
        }).showToast();
    });     
  }
}

// Limpiar talle seleccionado al cargar la página
localStorage.removeItem('talleSeleccionado');


// Ejecutar al cargar
inicializarDetalleProducto();



