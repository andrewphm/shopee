import styled from 'styled-components';

// Media queries
import { mobile, tablet } from '../../responsive';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 50px;

  ${tablet({
    padding: '10px',
  })}
`;

export const CartNav = styled.div`
  padding: 1rem 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: black;
    padding: 10px 15px;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      transform: scale(1.04);
    }
  }

  ${tablet({
    padding: '1rem 0',
  })}
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin-right: 1rem;
    text-decoration: underline !important;
  }

  @media screen and (max-width: 350px) {
    a:first-child {
      display: none;
    }
  }
`;

export const Container = styled.div`
  padding: 30px 50px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  ${tablet({
    flexDirection: 'column',
    padding: '30px 0',
    rowGap: '2rem',
  })}
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;

  ${tablet({
    order: '2',
  })}
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 0.5px solid lightgray;

  :last-child {
    border-bottom: none;
  }

  ${mobile({
    flexDirection: 'column',
    gap: '0',
  })}
`;

export const ImageWrapper = styled.div`
  height: 200px;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const ProductDetails = styled.div`
  display: flex;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    align-items: flex-start;

    .price {
      font-size: 1.5rem;
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    align-items: flex-start;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    align-items: flex-start;

    button {
      text-decoration: underline;
      background-color: transparent;
      border: none;
      font-size: 1rem;
      margin: 0;
      padding: 0;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }
  }

  @media screen and (max-width: 350px) {
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 1rem;
    button {
      display: none;
    }
  }
`;

export const Colour = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  .circle {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.colour};
    border: 1px solid black;
  }
`;
export const Size = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const CheckOutContainer = styled.div`
  min-width: 300px;
  max-width: 500px;
  margin: 0 auto;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 100%;

  h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 0.5rem;
  }

  ${mobile({
    padding: '5px',
    width: '300px',
  })}
`;

export const PriceContainer = styled.div`
  border-top: 2px solid grey;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  button {
    margin-top: 1rem;
    background-color: black;
    color: white;
    padding: 10px 15px;
    border: none;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      transform: scale(1.03);
    }
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
