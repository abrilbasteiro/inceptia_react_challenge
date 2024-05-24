# Acerca de mi desarrollo

El proyecto consta de un dashboard desde donde se pueden seleccionar los distintos bots asociados a nuestra aplicación.  
Agregué un bot "test" para demostrar el funcionamiento del menu lateral y el cambio de las conversaciones mostradas según el cliente seleccionado.

Además, esta página principal cuenta con dos filtros (sólo aplicables a los clientes obtenidos desde la API):
- Filtro por fecha, mediante selección de días en el calendario.
- Filtro por estado, seleccionando los estados enlistados horizontalmente sobre la tabla de conversaciones. 


## Creación de página de inicio de sesión

Diseñé una página sencilla que permite autenticarse para obtener el token de seguridad.

Para poder desarrollar el proyecto 100% del lado del cliente guardé el token en localStorage, pero en un caso real sería ideal guardarlo en HttpOnly Cookies para garantizar la seguridad de nuestra aplicación.

## Instalación de dependencias
Aquí se encuentran las principales dependencias del proyecto:

- [Typescript](https://www.typescriptlang.org/) - Tipado estático para mejorar la calidad y mantenibilidad del código. (v^5.4.5)
- [Material UI](https://mui.com/material-ui/) - Biblioteca de componentes de interfaz de usuario de React basada en el diseño de Material Design de Google. (v^5.15.18)

## Selección de colores
Para el diseño del proyecto decidí mantener la estructura propuesta, pero seleccioné los colores de la web de [Inceptia](https://www.inceptia.ai/). La paleta utilizada es la siguiente:

![image](https://github.com/abrilbasteiro/inceptia_react_challenge/assets/85957932/f7afe602-f757-43a6-b575-2e6135e3fb5d)


Abril Basteiro  
Frontend developer  
[LinkedIn](https://www.linkedin.com/in/abrilbasteiro/)

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
