import React, { useEffect, useState } from 'react';

// React Router
import { useLocation } from 'react-router-dom';

// UI components
import { Products, FilterProducts } from '../components/index';

const ProductList = () => {
  const category = useLocation().pathname.split('/')[2];
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  return (
    <>
      <FilterProducts
        category={category}
        setFilter={setFilter}
        filter={filter}
        setSort={setSort}
        sort={sort}
      />
      <Products category={category} filter={filter} sort={sort} />
    </>
  );
};

export default ProductList;
