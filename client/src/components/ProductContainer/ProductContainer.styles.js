import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  h1 {
    font-weight: 200;
  }
  span {
    font-weight: 100;
    font-size: 40px;
  }
  p {
    margin: 20px 0px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  row-gap: 1rem;

  span {
    font-size: 1.5rem;
  }
`;

export const FilterList = styled.div`
  display: flex;
`;

export const CircleOutline = styled.div`
  padding: 5px;
  border-radius: 50%;
  margin-right: 0.3rem;
  border: 2px solid transparent;
  display: flex;

  :hover {
    border: 2px solid black;
  }
`;

export const Colour = styled.input`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.value};
  border: 1px solid darkgray;
  cursor: pointer;
  color: transparent;
`;

export const Size = styled.input`
  padding: 16px;
  background-color: transparent;
  outline: none;
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    color: white;
    background-color: black;
  }
`;

export const AddToCartContainer = styled.div`
  width: 100%;
`;

export const AddToCart = styled.button`
  cursor: pointer;
  width: 60%;
  height: 3rem;
  font-weight: 600;
  border: none;
  background-color: black;
  color: white;
  padding: 5px 9px;

  :hover {
    opacity: 0.8;
  }
`;
