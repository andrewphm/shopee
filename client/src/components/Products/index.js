import React from 'react';
import { Link } from 'react-router-dom';
// Styled-components
import { Container, Item, Circle, Image, Info, Icon } from './Products.styles';

// Data
import { popularProducts } from '../../data';

// MUI
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';

const ProductItem = ({ item }) => {
  const { img } = item;
  return (
    <Item>
      <Circle />
      <Image src={img} alt="product" />
      <Info>
        <Link to="/cart">
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
        </Link>
        <Link to={`/products/${Math.random()}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Item>
  );
};

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
