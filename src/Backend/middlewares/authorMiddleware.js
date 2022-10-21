const authorMiddleware = (req, res, next) => {
  res.author = {
    name: 'Gerson',
    lastname: 'Hoyos'
  };
  next();
};

module.exports = authorMiddleware;
