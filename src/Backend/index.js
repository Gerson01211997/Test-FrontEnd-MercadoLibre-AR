const express = require('express');
const compression = require('compression');
const path = require('path');
const itemsRoute = require('./api/items');

const PORT = 4000;
const app = express();
app.use(compression());

app.get('*.gz', function(req, res, next) {
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api/items', itemsRoute);
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

