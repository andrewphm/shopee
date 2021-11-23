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
  row-gap: 1.2rem;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  row-gap: 1rem;
`;

export const Colour = styled.button`
  padding: 20px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: ${(props) => props.colour};
  border: 1px solid darkgray;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.1);
  }
`;

export const Size = styled.button`
    padding: 16px;
    background-color: transparent;
    outline: none;
    margin-right: 1rem;
    cursor: pointer;

    :hover {
      color: white;
      background-color: black;
`;
