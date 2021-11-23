import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;

  h1 {
    font-size: 70px;
  }

  p {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
  }
`;
export const InputContainer = styled.div`
  width: 25%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  margin: 0 auto;

  input {
    font-size: 1.2rem;
    border: none;
    flex: 8;
    text-indent: 10px;
    :focus {
      outline: none;
    }
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: white;

    :hover :nth-child(1) {
      transition: all 0.2s ease;
      transform: scale(1.1);
    }
  }
`;
