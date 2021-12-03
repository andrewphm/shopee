import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTdiYzg5Yzc4NGRmNjgwNDU4ZTJkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODQ5MDM5MSwiZXhwIjoxNjM4NzQ5NTkxfQ.nHyzFymtL61ZK1T9t7-TZbEhaWQ0hxaGNdBHSup2MMs';

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

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

  stripeCheckout: async (stripeToken, cart) => {
    console.log(stripeToken);
    const response = await userRequest.post('/checkout/payment', {
      tokenId: stripeToken.id,
      amount: cart.total * 100 * 1.1,
    });

    return await response;
  },
};

export default apiSettings;
