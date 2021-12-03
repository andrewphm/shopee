import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 50px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  .desc {
    width: 90%;
    max-width: 500px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  padding-top: 1rem;
  width: 90%;
  max-width: 400px;
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .first-last-name {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;

  label {
    font-weight: 600;
  }

  input {
    width: 100%;
    border: 1px solid black;
    height: 2rem;
    padding: 8px;

    :hover {
      outline: none;
    }
  }

  button {
    height: 2.5rem;
    color: white;
    background-color: black;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }

    :disabled {
      color: black;
      cursor: not-allowed;
    }
  }
`;

export const Error = styled.span`
  color: red;
  font-weight: 600;
  text-align: center;
`;
