// Recuperamos el JSON del carrito del localStorage y lo transformamos en un array de objetos
let carritoProductos = JSON.parse(localStorage.getItem("carrito")) || [];

// Función principal
async function inicializarCarritoCompra() {
  const contenedorCarrito = document.querySelector(".producto-datalle-imagenes");
  const contenedorInfo = document.querySelector(".producto-datalle-info");

  if (carritoProductos.length === 0) {
    contenedorCarrito.innerHTML = `<p>El carrito de compras está vacío.</p>`;
    contenedorInfo.innerHTML = "";
    return;
  }

  contenedorCarrito.innerHTML = `<h2>Carrito de Compras</h2>`;
  contenedorInfo.innerHTML = "";
  let totalCarrito = 0;

  carritoProductos.forEach((item, index) => {
    contenedorInfo.innerHTML += `
      <div class="carrito-item">
          <p><strong>Producto:</strong> ${item.nombre}</p>
          <p><strong>Talle:</strong> ${item.talle}</p>
          <p><strong>Precio:</strong> $${item.precio.toLocaleString("es-AR")}</p>
          <button class="btn-eliminar" data-index="${index}">Eliminar producto</button>
      </div>
      <hr>
    `;
    totalCarrito += item.precio;
  });

  contenedorInfo.innerHTML += `
    <h3>Total a pagar: $${totalCarrito.toLocaleString("es-AR")}</h3>
    <div class="acciones-carrito">
      <button id="btnVaciar" class="btn-vaciar">Vaciar carrito</button>
      <button id="btnFinalizar" class="btn-finalizar">Finalizar compra</button>
    </div>
  `;

  // Eventos
  document.querySelectorAll(".btn-eliminar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      eliminarProducto(index);
    });
  });

  document.getElementById("btnVaciar").addEventListener("click", mostrarConfirmacionVaciar);
  document.getElementById("btnFinalizar").addEventListener("click", finalizarCompra);
}

// 🔔 Mostrar notificación Toastify
function mostrarToast(mensaje, color = "#333", duracion = 2500) {
  Toastify({
    text: mensaje,
    duration: duracion,
    gravity: "top",
    position: "right",
    backgroundColor: color,
    stopOnFocus: true
  }).showToast();
}

// 🗑️ Eliminar producto individual
function eliminarProducto(index) {
  const productoEliminado = carritoProductos[index]?.nombre || "Producto";
  carritoProductos.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carritoProductos));
  inicializarCarritoCompra();
  mostrarToast(`🗑️ ${productoEliminado} eliminado del carrito`, "#333");
}

// 🧹 Mostrar confirmación personalizada para vaciar carrito
function mostrarConfirmacionVaciar() {
  if (carritoProductos.length === 0) {
    mostrarToast("El carrito ya está vacío.", "#333");
    return;
  }

  // Creamos un contenedor temporal con botones
  const contenedor = document.createElement("div");
  contenedor.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;">
      <p style="margin:4px 0;font-weight:bold;">¿Vaciar carrito?</p>
      <div style="display:flex;gap:10px;">
        <button id="confirmarVaciar" style="background:#27ae60;color:#fff;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;">Sí</button>
        <button id="cancelarVaciar" style="background:#e74c3c;color:#fff;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;">No</button>
      </div>
    </div>
  `;

  // Mostramos Toastify con contenido HTML
  const toast = Toastify({
    node: contenedor,
    duration: 5000,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    backgroundColor: "#333",
    close: true
  }).showToast();

  // Escuchamos clicks dentro del toast
  contenedor.querySelector("#confirmarVaciar").addEventListener("click", () => {
    vaciarCarrito();
    toast.hideToast();
  });

  contenedor.querySelector("#cancelarVaciar").addEventListener("click", () => {
    toast.hideToast();
    mostrarToast("Cancelado 👍","#333");
  });
}

// 🧹 Vaciar carrito
function vaciarCarrito() {
  carritoProductos = [];
  localStorage.removeItem("carrito");
  inicializarCarritoCompra();
  mostrarToast("🧹 Carrito vaciado correctamente", "#333");
}

// 💳 Finalizar compra
function finalizarCompra() {
  if (carritoProductos.length === 0) {
    mostrarToast("Tu carrito está vacío.", "#333");
    return;
  }

  // Redirigir a página envio-pag.html 
  window.location.href = "envio-pago.html";
  
 // inicializarCarritoCompra();
}

// Ejecutar al cargar
inicializarCarritoCompra();
