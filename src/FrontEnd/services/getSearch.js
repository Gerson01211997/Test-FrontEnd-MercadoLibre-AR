import axios from 'axios';

export const getSearch = async ({queryData}) =>{
    try {
        const response = await axios.get(`/api/items?q=${queryData}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
}