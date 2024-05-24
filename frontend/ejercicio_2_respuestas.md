## 2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por ejemplo autenticación, solicitud de clientes activos para el usuario y solicitud de casos por cliente)

Para la resolucion del proyecto elegí utilizar Context Api de React para menejar los cambios de estado.

En caso de querer realizarlo con Redux deberíamos crear las actions necesarias para cubrir los cambios de estado que necesitamos seguir. Luego, debemos definir los reducers que van a manejar las actions antes mencionadas y, por ultimo, necesitamos configurar el store de Redux que almacena el estado de la aplicación.

## 2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js?
En la resolucion del proyecto ya se encuentra implementado el ruteo. 
En el archivo index.js se carga el componente App.tsx que es la ruta principal de la aplicación. Allí se maneja el enrutamiento utilizando react-router-dom.

