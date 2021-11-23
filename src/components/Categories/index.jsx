import React from 'react';

//data
import { categories } from '../../data';

//styles
import { Container, ImageWrapper, Info, Item } from './Categories.styles';

const CategoryItem = ({ item }) => {
  const { id, title, img } = item;
  return (
    <Item key={id}>
      <ImageWrapper>
        <img src={img} alt={title} />
      </ImageWrapper>
      <Info>
        <h1>{title}</h1>
        <button>SHOP NOW</button>
      </Info>
    </Item>
  );
};

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
