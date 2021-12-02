import React, { useEffect, useState } from 'react';
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

// API
import API from '../../API';

const ProductItem = ({ item }) => {
  const { img, _id } = item;

  return (
    <Item>
      <Circle />
      <Image src={img[1].img_small} alt="product" />
      <Info>
        <Link to="/cart">
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
        </Link>
        <Link to={`/products/allstyles/${_id}`} state={item}>
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
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await API.fetchProducts();
      setState(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      {state.map((item) => (
        <ProductItem item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
