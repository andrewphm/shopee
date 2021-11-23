import React from 'react';

// Layout
import Layout from '../components/Layout';

// UI components
import { Products, FilterProducts } from '../components/index';

const ProductList = () => {
  return (
    <Layout>
      <FilterProducts />
      <Products />
    </Layout>
  );
};

export default ProductList;
