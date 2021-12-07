import axios from 'axios';

const BASE_URL = 'https://shopi-server.herokuapp.com/api/';

const apiSettings = {
  fetchProducts: async () => {
    const products = await axios.get(`${BASE_URL}products`);
    return products;
  },

  fetchProduct: async (id) => {
    const product = await axios.get(`${BASE_URL}products/find/${id}`);
    return product;
  },

  stripeCheckout: async (stripeToken, cart, token) => {
    try {
      const res = await axios.post(
        `${BASE_URL}checkout/payment`,
        {
          tokenId: stripeToken.id,
          amount: cart.total * 100 * 1.1,
        },
        { headers: { token: `Bearer ${token}` } }
      );

      return res;
    } catch (error) {
      console.log(error);
    }
  },
  signInUser: async (user) => {
    try {
      const res = await axios.post(`${BASE_URL}auth/signin`, user);

      return res;
    } catch (error) {
      console.log(error);
    }
  },

  registerUser: async (user) => {
    try {
      const res = await axios.post(`${BASE_URL}auth/register`, user);
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
