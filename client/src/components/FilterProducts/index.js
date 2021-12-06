import React, { useState } from 'react';
import { useLocation } from 'react-router';

// Styled-components
import {
  Container,
  Filter,
  FilterContainer,
  Select,
  Option,
} from './FilterProducts.styles';

// UI components
import { BreadCrumb } from '../index';

const FilterProducts = () => {
  const category = useLocation().pathname.split('/')[2];
  const [filter, setFilter] = useState('');

  return (
    <Container>
      <BreadCrumb category={category} filter={filter} />
      <FilterContainer>
        <Filter>
          <span>Filter Products:</span>
          <Select onChange={(event) => setFilter(event.target.value)}>
            <Option selected value="shop all">
              Shop All
            </Option>
            <Option value="shirts">Shirts</Option>
            <Option value="pants">Pants</Option>
            <Option value="outerwear">Outerwear</Option>
          </Select>
        </Filter>
        <Filter>
          <span>Sort Products:</span>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price low to high</Option>
            <Option>Price high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default FilterProducts;
