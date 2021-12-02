import axios from 'axios';

const apiSettings = {
  fetchProducts: async () => {
    const products = await axios.get('http://localhost:5000/api/products');
    return products;
  },

  fetchProduct: async (id) => {
    const product = await axios.get(
      `http://localhost:5000/api/products/find/${id}`
    );
    return product;
  },
};

export default apiSettings;
