import React, { useState, useRef } from 'react';

//react router
import { useLocation } from 'react-router-dom';

// Styled-components
import {
  Container,
  ImgContainer,
  InfoContainer,
  Image,
  Filter,
  FilterContainer,
  Colour,
  CircleOutline,
  Size,
  FilterList,
  AddToCartContainer,
  AddToCart,
} from './ProductContainer.styles';

const ProductContainer = ({ product }) => {
  const colourRef = useRef(null);
  const sizeRef = useRef(null);
  const [size, setSize] = useState('');
  const [colour, setColour] = useState('');

  const handleColourClick = (e) => {
    if (colourRef.current)
      colourRef.current.style.border = '2px solid transparent';
    colourRef.current = e.target.parentElement;
    colourRef.current.style.border = '2px solid black';
    setColour(e.target.value);
  };

  const handleSizeClick = (e) => {
    if (sizeRef.current) {
      sizeRef.current.style.backgroundColor = 'transparent';
      sizeRef.current.style.color = 'black';
    }
    sizeRef.current = e.target;
    sizeRef.current.style.backgroundColor = 'black';
    sizeRef.current.style.color = 'white';
    setSize(e.target.value);
  };

  const location = useLocation();
  const item = location.state;

  return (
    <Container>
      <ImgContainer>
        <Image src={item.img[0].img_main} />
      </ImgContainer>
      <InfoContainer>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <span>$ {item.price}</span>
        <FilterContainer>
          <Filter>
            <h3>
              COLOUR: <span>{colour && colour}</span>
            </h3>
            <FilterList>
              {item.color.map((color) => (
                <CircleOutline>
                  <Colour
                    onClick={handleColourClick}
                    value={color}
                    type="button"
                  />
                </CircleOutline>
              ))}
            </FilterList>
          </Filter>
          <Filter>
            <h3>
              SIZE: <span>{size && size}</span>{' '}
            </h3>
            <FilterList>
              <Size onClick={handleSizeClick} type="button" value="XS" />

              <Size onClick={handleSizeClick} type="button" value="S" />

              <Size onClick={handleSizeClick} type="button" value="M" />

              <Size onClick={handleSizeClick} type="button" value="L" />
            </FilterList>
          </Filter>
        </FilterContainer>
        <AddToCartContainer>
          <AddToCart>
            {size && colour ? 'ADD TO CART' : 'Choose a size and colour'}
          </AddToCart>
        </AddToCartContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductContainer;
