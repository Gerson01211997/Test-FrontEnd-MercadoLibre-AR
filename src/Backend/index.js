const express = require('express');
const compression = require('compression');
const path = require('path');
const itemsRoute = require('./api/items');

const PORT = 4000;
const app = express();
//Comprimimos el proyecto para mejor performance
app.use(compression());

//Con webpack se configuró para exportar un gzip y comprimir, aquí se lee el contenido
app.get('*.gz', function(req, res, next) {
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

// Indicamos la ruta donde se exportará la build de React
app.use(express.static(path.join(__dirname, 'dist')));

//Consumimos las rutas, en este caso, /api/items ---> y los parámetros para consumir como api (en webpack se configura proxy)
app.use('/api/items', itemsRoute);

//Aquí le indicamos a express dónde encontrar el proyecto y consumir las diferentes rutas, sino, lo tomará como un error de GET
app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, 
  '/dist/index.html'));
 });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});



app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || 4000}!`));

