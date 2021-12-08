import React from 'react';
import styled from 'styled-components';

import img from '../construction.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin: 4rem 0;
  row-gap: 2rem;

  p {
    font-weight: 600;
    text-align: center;
  }
`;
const ImageWrapper = styled.div`
  height: 30vh;

  img {
    height: 100%;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <ImageWrapper>
        <img src={img} alt="" />
      </ImageWrapper>
      <p>Sorry, this webpage is not available, please come back later!</p>
    </Container>
  );
};

export default NotFound;
