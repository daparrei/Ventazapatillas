const BASE = "https://69071d72b1879c890ed8d89d.mockapi.io/payments";

let carritoPago = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", () => {
    inicializarCarritoCompra();

    const btn = document.getElementById("procesar-pago");
    btn.addEventListener("click", procesarPago);
});

// ---------------------------
// MOSTRAR CARRITO
// ---------------------------
function inicializarCarritoCompra() {
    const contenedorCarrito = document.getElementById("total-carrito");

    if (!carritoPago || carritoPago.length === 0) {
        contenedorCarrito.innerHTML = `<p>No hay productos en el carrito.</p>`;
        return;
    }

    let totalCarrito = carritoPago.reduce((acc, item) => acc + item.precio, 0);

    contenedorCarrito.innerHTML = `
        <h2>Carrito de Compras</h2>
        <h3>Total a pagar: $${totalCarrito.toLocaleString("es-AR")}</h3>
    `;
}

// ---------------------------
// VALIDACIONES
// ---------------------------
function validarCampos() {
    const nombre = document.getElementById("nombreTitular").value.trim();
    const tarjeta = document.getElementById("numeroTarjeta").value.trim();
    const vencimiento = document.getElementById("fechaVencimiento").value.trim();
    const cvv = document.getElementById("codigoSeguridad").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validar nombre
    if (nombre.length < 3) {
        return "El nombre del titular es inválido.";
    }

    // Validar tarjeta (16 números)
    if (!/^\d{16}$/.test(tarjeta)) {
        return "El número de tarjeta debe tener 16 dígitos.";
    }

    // Validar fecha vencimiento (MM/AA)
    if (!/^\d{2}\/\d{2}$/.test(vencimiento)) {
        return "La fecha de vencimiento debe tener el formato MM/AA.";
    }

    const [mes, anio] = vencimiento.split("/").map(n => parseInt(n));
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear() % 100; // últimos 2 dígitos
    const mesActual = fechaActual.getMonth() + 1;

    if (mes < 1 || mes > 12) {
        return "El mes de la fecha de vencimiento es inválido.";
    }

    if (anio < anioActual || (anio === anioActual && mes < mesActual)) {
        return "La tarjeta está vencida.";
    }

    // Validar CVV (3 o 4 dígitos)
    if (!/^\d{3,4}$/.test(cvv)) {
        return "El código de seguridad debe tener 3 o 4 dígitos.";
    }

    // Validar email simple
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "El correo electrónico es inválido.";
    }

    return null; // todo OK
}

// ---------------------------
// PROCESAR PAGO
// ---------------------------
async function procesarPago() {

    if (carritoPago.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Carrito vacío",
            text: "No hay productos para procesar el pago.",
            confirmButtonColor: "#1565c0"
        });
        return;
    }

    // Validar campos antes de procesar
    const error = validarCampos();
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Datos inválidos",
            text: error,
            confirmButtonColor: "#c62828"
        });
        return;
    }

    // Total del carrito
    const total = carritoPago.reduce((acc, item) => acc + item.precio, 0);

    // Mostrar popup de carga
    Swal.fire({
        title: "Procesando pago...",
        html: "Por favor espere",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });

    try {
        const pagoCreado = await crearPago({ amount: total });

        setTimeout(async () => {
            const resultado = Math.random() < 0.5 ? "approved" : "rejected";

            const pagoActualizado = await actualizarPago(pagoCreado.id, resultado);

            if (pagoActualizado.status === "approved") {
                Swal.fire({
                    icon: "success",
                    title: "Pago aprobado ✔",
                    text: `Total pagado: $${total.toLocaleString("es-AR")}`,
                    confirmButtonColor: "#2e7d32"
                });

                localStorage.removeItem("carrito");
                carritoPago = [];
                inicializarCarritoCompra();
                window.location.href = "order-confirmacion.html";

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Pago rechazado ❌",
                    text: "El pago no pudo completarse.",
                    confirmButtonColor: "#c62828"
                });
            }

        }, 1500);

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ocurrió un problema al procesar el pago.",
            confirmButtonColor: "#c62828"
        });
    }
}

// ---------------------------
// API MOCK
// ---------------------------
async function crearPago({ amount }) {
    const resp = await fetch(BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            amount,
            currency: "ARS",
            status: "pending",
            createdAt: new Date().toISOString()
        })
    });
    return resp.json();
}

async function actualizarPago(id, status) {
    const resp = await fetch(`${BASE}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
    });
    return resp.json();
}
