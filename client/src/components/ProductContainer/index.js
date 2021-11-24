import React, { useState, useRef } from 'react';

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
} from './ProductContainer.styles';

const ProductContainer = () => {
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
            <h3>
              COLOUR: <span>{colour && colour}</span>
            </h3>
            <FilterList>
              <CircleOutline>
                <Colour
                  onClick={handleColourClick}
                  value="slategrey"
                  type="button"
                />
              </CircleOutline>
              <CircleOutline>
                <Colour
                  onClick={handleColourClick}
                  value="white"
                  type="button"
                />
              </CircleOutline>
              <CircleOutline>
                <Colour
                  onClick={handleColourClick}
                  value="black"
                  type="button"
                />
              </CircleOutline>
            </FilterList>
          </Filter>
          <Filter>
            <h3>
              SIZE: <span>{size && size}</span>{' '}
            </h3>
            <div>
              <Size onClick={handleSizeClick} type="button" value="XS" />

              <Size onClick={handleSizeClick} type="button" value="S" />

              <Size onClick={handleSizeClick} type="button" value="M" />

              <Size onClick={handleSizeClick} type="button" value="L" />
            </div>
          </Filter>
        </FilterContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductContainer;
