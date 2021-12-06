import styled from 'styled-components';

//Media queries
import { tablet } from '../../responsive';

export const Container = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  width: 100vw;
  gap: 1rem;

  ${tablet({
    flexDirection: 'column',
  })}
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 500px;

  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.1);
      filter: grayscale(100%);
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    margin-bottom: 20px;
    text-align: center;
    font-size: clamp(2rem, 10vw, 35px);
  }

  button {
    color: black;
    border: none;
    background-color: white;
    font-weight: 600;
    font-size: 1.1.rem;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.05);
    }
  }
`;

export const Item = styled.div`
  position: relative;
  flex: 1;
`;
