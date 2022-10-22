const axios = require('axios');

const getProductsInSearch = async (query) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
    );
    return response;
  } catch (error) {
    console.error('ProductsByQuery:',{error});
    return error
  }
};

const getProductById = async (productId) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${productId}`
    );
    return response;
  } catch (error) {
    console.error('ProductDetail:',{error});
    return error
  }
};

const getProductDescriptionById = async (productId) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${productId}/description`
    );
    return response;
  } catch (error) {
    console.error('ProductDescription:',{error});
    return error
  }
  
};

const getProductCategoryById = async (productId) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/categories/${productId}`
    );
    return response;
  } catch (error) {
    console.error('ProductCategory:',{error});
    return error
  }
}

module.exports = {
  getProductsInSearch,
  getProductById,
  getProductDescriptionById,
  getProductCategoryById,
};
