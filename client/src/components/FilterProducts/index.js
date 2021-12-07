import React, { useState } from 'react';

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

const FilterProducts = ({ category, setFilter, filter, sort, setSort }) => {
  return (
    <Container>
      <BreadCrumb category={category} filter={filter} />
      <FilterContainer>
        <Filter>
          <span>Filter Products:</span>
          <Select onChange={(event) => setFilter(event.target.value)}>
            <Option value="all">Shop All</Option>
            <Option value="shirts">Shirts</Option>
            <Option value="pants">Pants</Option>
            <Option value="outerwear">Outerwear</Option>
          </Select>
        </Filter>
        <Filter>
          <span>Sort Products:</span>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option defaultValue value="1">
              Price low to high
            </Option>
            <Option value="-1">Price high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default FilterProducts;
