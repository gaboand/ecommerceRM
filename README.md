# Proyecto Final React App - Ecommerce Voila

El proyecto se trata de un ecommerce de prendas femeninas, se conecta a una base de datos creada en Firebase, que tiene los campos: nombre, precio, categoría, descripción, stock y foto de las prenda. 

Para hacer más amigable la carga de los datos, se creó otra App (llamada AppBack.js) que simula un administrador de BackEnd para la carga de nuevos productos y un control de stock. El mismo se encuentra el el repositorio : https://github.com/gaboand/BackEnd

Con respecto a la funcionanlidad de la App del Ecommerce, en el index se renderizan todas las cards con los productos en stock que se encuentran en la base de datos, mediante el Nav, se puede seleccionar entre cuatro opociones de prendas, las cuales se renderizan de acuerdo al filtro según su categoria. 

Cada producto da acceso al detalle del mismo, desde donde se puede selecciona la cantidad y agregarlos al carrito.

Una vez que se desea finalizar la compra, se puede acceder al Cart mediante el botçon de terminar compra o el Widget que se encuentra en el NavBar. Aquí es posible eliminar productos particulares, vaciar el carrito o continuar con el Checkout.

Una vez en el Checkout, es necesario completar los datos requeridos para que se generé la orden, esta se procesa, emite un Id que se referencia con un objeto dentro de una colección de datos llamada "Orders" en Firebase, donde se carga la fecha y el horario, detalle los productos adquiridos, el monto total y los datos del comprador.

Para finalizar, al momento que se genera la orden, se actualiza el stock de cada producto, restando las cantidades adquiridas al stock inicial para cada producto. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
