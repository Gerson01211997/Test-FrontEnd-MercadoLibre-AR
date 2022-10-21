import axios from 'axios';

export const getProductDetail = async ({productId}) =>{
    try {
        const response = await axios.get(`/api/items/${productId}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
}