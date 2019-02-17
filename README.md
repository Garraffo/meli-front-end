# Ejercicio Práctico de Front End
## Autor: Ezequiel Garraffo

# Introducción
En este repositorio se encuentra un ejercicio práctico para postulantes a desarrolladores Front End de Mercado Libre Argentina.

# Detalle
La aplicación consta de tres [vistas](https://github.com/Garraffo/meli-front-end/tree/master/src/vistas): HomePage, Busqueda de Productos y Detalle del Producto. 
Las mismas hacen uso de diferentes [componentes](https://github.com/Garraffo/meli-front-end/tree/master/src/components) creados los cuales reciben los datos para ser renderizados en pantalla.

## Funcionalidad
En la vista Home solo poseemos la barra de búsqueda. Al escribir algo que deseemos buscar y presionar 'Enter' o el botón con ícono de lupa, buscará publicaciones correspondientes y las mostrará, en caso de que existan, en un listado a través de la vista busquedaProductos.
Luego al presionar sobre cualquier publicación accederemos a la vista detalleProducto donde se mostrarán los detalles del mismo.

# Instrucciones de ejecución
Debe poseer Node instalado. Una vez descargado el proyecto, ubicarse con una terminal en la carpeta del mismo y seguir las siguientes instrucciones:

## Descargar las dependencias del proyecto.
```
npm install
```

## Ejecutar la aplicación
```
npm run start
```

Para acceder a la aplicación: [http://localhost:3000](http://localhost:3000)

# Demo
Para una demo ejecutable, presionar [aquí](https://meli-front-end.herokuapp.com/)
