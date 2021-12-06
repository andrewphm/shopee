import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTdiYzg5Yzc4NGRmNjgwNDU4ZTJkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODQ5MDM5MSwiZXhwIjoxNjM4NzQ5NTkxfQ.nHyzFymtL61ZK1T9t7-TZbEhaWQ0hxaGNdBHSup2MMs';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
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

  registerUser: async (user) => {
    try {
      const res = await publicRequest.post('/auth/register', user);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  createCart: async (body, token) => {
    try {
      await axios.post(`${BASE_URL}carts`, body, {
        headers: { token: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  },

  getUserCart: async (userId, token) => {
    try {
      let res = await axios.get(`${BASE_URL}carts/${userId}`, {
        headers: { token: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  updateUserCart: async (userId, token, body) => {
    try {
      await axios.put(`${BASE_URL}carts/${userId}`, body, {
        headers: { token: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  },

  createOrder: async (userId, token, body) => {
    try {
      let order = await axios.post(`${BASE_URL}orders`, body, {
        headers: { token: `Bearer: ${token}` },
      });

      return order;
    } catch (error) {
      console.log(error);
    }
  },
};

export default apiSettings;
