const router = require('express').Router();
const services = require('./../../../services');
const authorMiddleware = require('../../middlewares/authorMiddleware');

const getCategoriesForSearch = ({data}) =>{
  let categories = {}
  if (data.length > 0){
    let findCategories = data.find((item) => item.id == 'category')
    categories = findCategories.values[0].path_from_root
  } else {
    categories = []
  }
  return categories
}

const getProductCondition = ({data}) =>{
  let condition = data.find( (item) => {item.id === 'ITEM_CONDITION'})
  return condition
}

const apiCall = (req, res, next) => {
  
  //Aquí "escucho" y determino si en la ruta me viene un query para 
  // buscar o el parámetro para renderizar un producto (id)

  if (req.query && req.query.q) {
    services.getProductsInSearch(req.query.q).then((result) => {
      res.data = result.data;
      next();
    });
  } else if (req.params && req.params.id) {

    const getProducts = services.getProductById(req.params.id);
    const getProductDescription = services.getProductDescriptionById(req.params.id);

    //Uso AllSettled porque si una promesa no responde, puede seguir a la siguiente 
    // y enviar ciertas respuestas y trabajar con eso para que la app no se rompa

    Promise.allSettled([getProducts, getProductDescription]).then(
      (result) => {
        const categoryId = result[0].value.data.category_id;
        services.getProductCategoryById(categoryId).then(
          (resultCat) => {
            res.data = Object.assign(
              {},
              result[0].value.data,
              result[1].value.data,
              { categories: resultCat && resultCat.data.path_from_root }
            );

            next();
          }
        );
      }
    );
  }
};

const responseMiddleware = (req, res, next) => {

  let dataResponse = {
    author: res.author,
  };

  //Aquí armo toda la información dependiendo de la anterior respuesta

  if (req.query && req.query.q) {

    dataResponse['items'] = res.data.results;
    dataResponse['categories'] = getCategoriesForSearch({data: res.data.filters});

  } else if (req.params && req.params.id) {

    dataResponse['item'] = {
      id: res.data.id,
      title: res.data.title,
      price: {
        currency: res.data.currency_id,
        amount: res.data.price,
        decimals: res.data.price % 1
      },
      picture: res.data.pictures.length && res.data.pictures[0],
      condition: getProductCondition({data: res.data.attributes}),
      free_shipping: res.data.shipping && res.data.shipping.free_shipping,
      sold_quantity: res.data.sold_quantity,
      description: res.data.plain_text,
    };
    
    dataResponse.categories = res.data.categories;
  }


  res.json(dataResponse);
};

router.get(
  '/:id?',
  authorMiddleware,
  apiCall,
  responseMiddleware
);


module.exports = router;
