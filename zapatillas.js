// const productos = [
//   {
//     "id": "1",
//     "categoria": "Hombre",
//     "nombre": "Chalpa",
//     "precio": 52000,
//     "imagen": "img/Chalpa.webp",
//     "descripcion": "Renovamos el Chalpa, un calzado liviano que ofrece confort y durabilidad.",
//     "alt": "Zapatilla Topper Chalpa para hombre, color negro",
//     "talle": [38, 39, 40, 41]
//   },
//   {
//     "id": "2",
//     "categoria": "Hombre",
//     "nombre": "Enforcer",
//     "precio": 83000,
//     "imagen": "img/Enforcer.webp",
//     "descripcion": "Enforcer es la renovación de un clásico con estilo urbano aportando máximo comfort.",
//     "alt": "Zapatilla Topper Enforcer para hombre, estilo urbano",
//     "talle": [38, 39, 40, 41, 42, 43, 44]
//   },
//   {
//     "id": "3",
//     "categoria": "Hombre",
//     "nombre": "Split",
//     "precio": 49000,
//     "imagen": "img/Split.webp",
//     "descripcion": "Un calzado de running pensado en minimizar el peso y optimizar la amortiguación.",
//     "alt": "Zapatilla Topper Split para hombre, running y amortiguación",
//     "talle": [38, 39, 40, 41, 42, 43, 44]
//   },
//   {
//     "id": "4",
//     "categoria": "Mujer",
//     "nombre": "Liss",
//     "precio": 69000,
//     "imagen": "img/Liss.webp",
//     "descripcion": "El modelo LISS es un concepto femenino muy liviano.",
//     "alt": "Zapatilla Topper Liss para mujer, diseño liviano",
//     "talle": [35, 36, 37, 38, 39, 40, 41]
//   },
//   {
//     "id": "5",
//     "categoria": "Mujer",
//     "nombre": "Terre",
//     "precio": 69900,
//     "imagen": "img/Terre.webp",
//     "descripcion": "En Topper tenemos historia, y por eso lanzamos Terre.",
//     "alt": "Zapatilla Topper Terre para mujer, modelo clásico",
//     "talle": [35, 36, 37, 38, 39, 40, 41]
//   },
//   {
//     "id": "6",
//     "categoria": "Mujer",
//     "nombre": "Squat",
//     "precio": 55900,
//     "imagen": "img/Squat.webp",
//     "descripcion": "Entrenamiento y moda se conjugan en este nuevo diseño de producto.",
//     "alt": "Zapatilla Topper Squat para mujer, entrenamiento y moda",
//     "talle": [35, 36, 37, 38, 39, 40, 41]
//   },
//   {
//     "id": "7",
//     "categoria": "Niños",
//     "nombre": "Circus",
//     "precio": 55000,
//     "imagen": "img/Circus.webp",
//     "descripcion": "Circus Kids es una zapatilla muy trendy, super comoda y funcional.",
//     "alt": "Zapatilla Topper Circus para niños, cómoda y funcional",
//     "talle": [29, 30, 31, 32, 33, 34, 35]
//   },
//   {
//     "id": "8",
//     "categoria": "Niños",
//     "nombre": "Hyde",
//     "precio": 52900,
//     "imagen": "img/Hyde.webp",
//     "descripcion": "Esta zapa con mucho glitter es todo lo que vas a necesitar para brillar a diario.",
//     "alt": "Zapatilla Topper Hyde para niños, con glitter",
//     "talle": [29, 30, 31, 32, 33, 34, 35]
//   },
//   {
//     "id": "9",
//     "categoria": "Niños",
//     "nombre": "X-Force",
//     "precio": 70500,
//     "imagen": "img/Force.webp",
//     "descripcion": "Diseñado para el uso diario e intensivo, ideal para uso colegial.",
//     "alt": "Zapatilla Topper X-Force para niños, uso diario y escolar",
//     "talle": [29, 30, 31, 32, 33, 34, 35]
//   }
// ];

// Cargar la const productos desde un API externa (https://69071d72b1879c890ed8d89d.mockapi.io/productos) en lugar de un archivo local

const productos = [];

async function cargarProductos() {
  try {
    const response = await fetch('https://69071d72b1879c890ed8d89d.mockapi.io/productos');
    const data = await response.json();
    
    // Evita duplicados limpiando antes
    productos.length = 0;
    productos.push(...data);
    
    console.log('Productos cargados:', productos);

  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}



