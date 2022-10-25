//Middleware para enviar el author, se podría mutar dentro del objeto final pero por buena práctica es mejor separar

const authorMiddleware = (req, res, next) => {
  res.author = {
    name: 'Gerson',
    lastname: 'Hoyos'
  };
  next();
};

module.exports = authorMiddleware;
