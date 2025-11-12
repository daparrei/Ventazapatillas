# CURSO JAVA SCRIPT 
Manual de Uso





Entrega  Final



Puede contener un único documento HTML, o varios, de acuerdo a cómo has estructurado tu proyecto.
[DONE]

documentos CSS
Debe contener al menos un archivo CSS o, en su defecto, un framework CSS como Bootstrap, Tailwind, Materialize o cualquier otro que consideres necesario para desarrollar una interfaz gráfica acorde para tu proyecto. [DONE]

Archivos JavaScript
Debe contener al menos dos archivos JavaScript, referenciados en el o los documentos HTML donde desarrollas la interfaz gráfica de tu simulador. [DONE]
Debe contener al menos un archivo en formato .JSON, el cual será tu base de datos simulada. Si utilizas un servicio de backend en nube, asegúrate de que el mismo esté abierto a ser utilizado desde cualquier URL. [Se hace una llamada un API]

Recursos adicionales
Incluye una subcarpeta de assets con las imágenes, videos, y otros elementos multimedia necesarios para la funcionalidad de tu simulador interactivo.[DONE]
Si tu proyecto cuenta con alguna particularidad o pre-configuración a realizar antes de probarlo, incluye un archivo readme.md en el mismo para guiar al docente corrector sobre los previos a realizar antes de probarlo. [PENING]


Uso de DOM
Tu aplicación JavaScript debe interactuar con HTML utilizando DOM y los eventos necesarios.

Arrays
Todos los arrays de objetos que utilices dentro de tu aplicación deben ser convertidos a un archivo en formato .JSON y accedidos mediante la tecnología Fetch.
Lógica de tu aplicación
El simulador interactivo debe completar todo el circuito o proceso de negocio, de acuerdo a la temática del mismo. Debes obviar temas más complejos como ser un registro de usuario y login, pero no puedes obviar armar un circuito completo de una compra online, o de la cotización de productos o servicios.

Uso de herramientas de terceros
Debes incluir al menos una librería JS externa y debes eliminar el uso de herramientas más limitadas del lenguaje, como ser los cuadros de diálogo Prompt, Confirm y Alert, además de eliminar todo rastro de mensajes en la consola JS de las Herramientas para Desarrollador (DevTools).

Código claro
Todo tu código debe ser claro y estar correctamente estructurado para su lectura. Puedes dejar comentarios breves en el código, pero no puedes dejar código en desuso/comentado que complique la lectura y análisis del mismo durante el período de corrección.
Evita utilizar herramientas de Minificación de código para esta instancia como también incluir recursos pesados dentro del proyecto.


Uso de DOM
JavaScript debe estar integrado con HTML mediante DOM y Eventos. No debes mostrar productos o servicios de tu simulador generados de forma estática en HTML. Todo esto debe provenir de JavaScript, creando el HTML dinámico mediante Template Strings + Literals.

Interfaz visual
Tus documentos HTML deben integrar CSS nativo o un Framework como los mencionados al inicio de este documento. Tu aplicación debe contener una estética visual más o menos acorde, y no debe ser solamente una estructura HTML.
Tus documentos HTML no deben contener código JS.

Valida y controla los errores
Integra las herramientas necesarias para controlar errores, como ser el uso de try - catch - finally. No muestres errores de JavaScript en la interfaz de usuario, muestra errores utilizando mensajes del estilo UX. El usuario no tiene porqué conocer los aspectos técnicos de tu aplicación.

Utiliza archivos JSON como base de datos/backend
Si bien puedes sumar servicios en nube como Mockapi o Firebase, preferimos que armes todo tu “backend” en archivos JSON. Evitas que un servicio en nube pueda estar caído al momento de corregir tu entrega, o que la misma no pueda ser accedida desde una computadora diferente a la tuya por restricciones de IP, Puerto, o cualquier otro factor técnico.


Circuito completo
Realiza un análisis previo a crear tu proyecto, de cómo funcionan servicios similares al simulador que deseas realizar. Esto te permite enfocarte en desarrollar las funciones más importantes y pensar con tiempo cómo simular aquellas limitaciones técnicas que puedan existir para con tu simulador.

- complejo + dinámico
No pierdas tiempo realizando pantallas de registro - login - formulario para completar datos al finalizar una compra o cotización, ni otras secciones de tu simulador que no aporten a la interactividad del mismo.
Si la lógica de tu simulador depende de un registro y un login, o de completar datos para el envío de información o el pago de una compra, ten a bien pre-cargar el contenido de estos formularios y cajas de texto para que la persona que corrige no deba llenarlos de forma manual.
Recuerda que no solo vemos el código, también probamos la experiencia de uso de la aplicación, por lo tanto si tenemos que llenar formularios, o registrarnos, o loguearnos con datos específicos, debemos dedicar mucho más tiempo a las correcciones y cualquier error involuntario en estos procesos puede hasta invalidar la aprobación de tu proyecto.
Enfoca tu energía al 100% en que la lógica del proceso de negocio de tu simulador funcione correctamente. No te enfoques en estos detalles secundarios.

Guía de uso
Si bien tu proyecto puede ser fácil y sencillo, agrega una guía de uso en un archivo readme.md, redactada de forma simple. Esto ayuda al corrector a entender ante qué tipo de aplicación web se encuentra, para tener presente la lógica de negocio que debe evaluar.

