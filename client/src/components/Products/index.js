import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Styled-components
import { Container, Item, Circle, Image, Info, Icon } from './Products.styles';

// MUI
import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons';

// API
import API from '../../API';

const ProductItem = ({ item }) => {
  const { img, _id } = item;

  return (
    <Item>
      <Circle />
      <Image src={img[1].img_small} alt="product" />
      <Info>
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

const Products = ({ filter, category, sort }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.fetchProducts();
        let products = data;
        if (category) {
          products = data.filter((product) => {
            return product.categories.includes(category);
          });
        }
        if (filter && filter !== 'all') {
          products = products.filter((product) => {
            return product.categories.includes(filter);
          });
        }
        if (sort === '1') {
          products.sort((a, b) => {
            return a.price - b.price;
          });
        }
        if (sort === '-1') {
          products.sort((a, b) => {
            return b.price - a.price;
          });
        }
        setState(products);
      } catch (error) {
        console.log(error);
      }
    };

    (filter || category || sort) && fetchProducts();
  }, [filter, category, sort]);

  useEffect(() => {
    const fetchProducts = async () => {
      const sessionState = sessionStorage.getItem('homeState');
      if (sessionState) {
        return setState(JSON.parse(sessionState));
      }

      const res = await API.fetchProducts();

      sessionStorage.setItem('homeState', JSON.stringify(res.data));

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
