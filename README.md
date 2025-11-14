# CURSO JAVA SCRIPT 

Ventazapatillas

Simulador de tienda de zapatillas con carrito de compras, pago y mock-API.

📄 Descripción

Este proyecto es una pequeña tienda de zapatillas que permite:

Mostrar productos dinámicamente mediante una API Mock (https://69071d72b1879c890ed8d89d.mockapi.io/productos)
Agregar productos al carrito.
Ver el total del carrito.
Llenar un formulario de pago.
Procesar el pago mediante una API mock (estado pendiente / aprobado / rechazado)  (https://69071d72b1879c890ed8d89d.mockapi.io/payments)
Validaciones básicas de formulario.
Redirección a página de confirmación cuando el pago se aprueba.

🧰 Tecnologías utilizadas

HTML5 + CSS3 + Bootstrap.
JavaScript puro para la lógica del carrito, formulario y pago.
Uso de localStorage para persistencia del carrito.
API mock con endpoints POST / PUT para pago y productos
Librería externa de interfaz de usuario (SweetAlert2 y Tostify) para mostrar pop-ups y notifiaciones

🎯 Flujo de la aplicación

El usuario ve los productos disponibles y elige un modelo.
El usuario seleciona del modelo los talles disponibles.
En el carrito se muestra el total a pagar y el importe de cada producto.
En el carrito se puede eliminar algun producto, vacia el carrito o finalizar la compra
En la pantalla de pago, el usuario debe completar los datos de pago y luego se procesa el mismo.
Antes de enviar, el sistema valida los campos: formato correcto de tarjeta, CVV, correo, vencimiento, etc.
Si pasa la validación, se envía al backend mock con status = "pending".
Tras unos segundos se actualiza el pago a approved o rejected. (RANDOM)
Si es aprobado: se vacía el carrito, se redirige a order-confirmacion.html. Si es rechazado: se muestra un mensaje de error y se mantiene el carrito.

🧾 Estructura de carpetas

/css/ → estilos CSS personalizados.
/img/ → imágenes de productos.
/pages/ → páginas secundarias (confirmación, etc.).
/script_envio-pago.js → lógica de pago.
/script_carrito-compra.js → lógica del carrito.
/script_producto-detalle.js → detalle de producto.
/script_navbar.js → barra de navegación.
/zapatillas.js → datos de productos (o carga dinámica).

