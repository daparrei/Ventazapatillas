/* <nav id="navbar"class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <!-- Logo o título -->
    <a class="navbar-brand" href="index.html">Inicio</a>

    <!-- Botón que aparece en móviles para abrir el menú -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Menú colapsable -->
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="./pages/nosotros.html">Nosotros</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link" href="./pages/producto-detalle.html">Zapatillas</a>
        </li>

        <!-- Dropdowns -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hombre
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#Chalpa">Chalpa</a></li>
            <li><a class="dropdown-item" href="#Enforcer">Enforcer</a></li>
            <li><a class="dropdown-item" href="#Split">Split</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mujer
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#Liss">Liss</a></li>
            <li><a class="dropdown-item" href="#Terre">Terre</a></li>
            <li><a class="dropdown-item" href="#Squat">Squat</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Niños
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#Circus">Circus</a></li>
            <li><a class="dropdown-item" href="#Hyde">Hyde</a></li>
            <li><a class="dropdown-item" href="#X-Force">X-Force</a></li>
          </ul>
        </li>
      </ul>
*/


// Función para generar navbar dinámico
function crearNavbar(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Crear el <nav> con Bootstrap
  const nav = document.createElement('nav');
  nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
  nav.innerHTML = `
    <div class="container-fluid">
      <a class="navbar-brand" href="../index.html">Inicio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul class="navbar-nav" id="navbar-categorias">
          <li class="nav-item">
            <a class="nav-link" href="../pages/nosotros.html">Nosotros</a>
          </li>
        </ul>
    </div>
  `;
  container.appendChild(nav);

  // Agrupar productos por categoría
  const categorias = {};
  productos.forEach(p => {
    if (!categorias[p.categoria]) categorias[p.categoria] = [];
    categorias[p.categoria].push(p);
  });

  const ul = nav.querySelector('#navbar-categorias');

  // Crear dropdowns
  for (const [categoria, productosCat] of Object.entries(categorias)) {
    const li = document.createElement('li');
    li.classList.add('nav-item', 'dropdown');

    const a = document.createElement('a');
    a.classList.add('nav-link', 'dropdown-toggle');
    a.href = '#';
    a.setAttribute('role', 'button');
    a.setAttribute('data-bs-toggle', 'dropdown');
    a.setAttribute('aria-expanded', 'false');
    a.textContent = categoria;

    const ulCat = document.createElement('ul');
    ulCat.classList.add('dropdown-menu', 'dropdown-menu-dark');

    productosCat.forEach(p => {
      const liProd = document.createElement('li');
      const aProd = document.createElement('a');
      aProd.classList.add('dropdown-item');
      aProd.href = `../pages/producto-detalle.html?id=${p.id}`; // pasa id en URL
      aProd.textContent = p.nombre;
      liProd.appendChild(aProd);
      ulCat.appendChild(liProd);
    });

    li.appendChild(a);
    li.appendChild(ulCat);
    ul.appendChild(li);
  }

  //Cuando se seleccionar un producto en el dropdown, guardar el ID en localStorage
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
      const urlParams = new URLSearchParams(event.target.search);
      const productoId = urlParams.get('id');
      localStorage.setItem('productoSeleccionado', productoId);
              }
          );
      }   
  );

}


// --- NUEVO: función asincrónica que espera la carga de productos ---
async function inicializarNavbar() {
  // Espera a que los productos estén disponibles
  if (productos.length === 0) {
    await cargarProductos();
  }

  // Ahora que están cargados, crea el navbar
  crearNavbar('navbar-container');
}

// Ejecutar
inicializarNavbar();

