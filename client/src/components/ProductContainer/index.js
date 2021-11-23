import React, { useState } from 'react';

// Styled-components
import {
  Container,
  ImgContainer,
  InfoContainer,
  Image,
  Filter,
  FilterContainer,
  Colour,
  Size,
} from './ProductContainer.styles';

const ProductContainer = () => {
  const [size, setSize] = useState('');
  const [colour, setColour] = useState('');
  const handleClick = (e) => {
    let ele = e.target;
    ele.style.transform = 'scale(1.1)';
  };

  return (
    <Container>
      <ImgContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ImgContainer>
      <InfoContainer>
        <h1>Denim Jumpsuit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          facere! Assumenda facere eum ab nesciunt exercitationem. Eius
          voluptatem nulla officiis. Assumenda facere eum ab nesciunt
          exercitationem. Eius voluptatem nulla officiis.
        </p>
        <span>$ 20</span>
        <FilterContainer>
          <Filter>
            <h3>COLOUR: {colour && <span>{colour}</span>} </h3>
            <div>
              <Colour onClick={handleClick} colour="slategrey" />
              <Colour colour="white" />
              <Colour colour="black" />
            </div>
          </Filter>
          <Filter>
            <h3>SIZE: </h3>
            <div>
              <Size>XS</Size>
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
            </div>
          </Filter>
        </FilterContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductContainer;
