import React from 'react';
import { useLocation } from 'react-router';

// Styled-components
import {
  Container,
  Filter,
  Title,
  FilterContainer,
  Select,
  Option,
} from './FilterProducts.styles';

const FilterProducts = () => {
  const category = useLocation().pathname.split('/')[2];

  return (
    <Container>
      <Title>{category ? category : 'All styles'}</Title>
      <FilterContainer>
        <Filter>
          <span>Filter Products:</span>
          <Select>
            <Option disabled selected>
              Colour
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
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
