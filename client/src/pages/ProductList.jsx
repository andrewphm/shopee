import React from 'react';

// UI components
import { Products, FilterProducts } from '../components/index';

const ProductList = () => {
  return (
    <>
      <FilterProducts />
      <Products />
    </>
  );
};

export default ProductList;
