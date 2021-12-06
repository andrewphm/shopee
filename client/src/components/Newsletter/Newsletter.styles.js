import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;

  h1 {
    font-size: clamp(2rem, 5vw, 60px);
  }

  p {
    font-size: clamp(16px, 5vw, 24px);
    font-weight: 300;
    text-align: center;
  }
`;
export const InputContainer = styled.div`
  min-width: 290px;
  width: 25%;
  height: 40px;
  background-color: white;
  display: flex;
  border: 1px solid lightgrey;
  margin: 0 auto;

  input {
    width: 100%;
    font-size: 1.2rem;
    border: none;
    text-indent: 10px;
    :focus {
      outline: none;
    }
  }

  button {
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
