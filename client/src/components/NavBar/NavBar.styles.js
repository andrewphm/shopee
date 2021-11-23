import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  color: black;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  column-gap: 1rem;
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;

  :focus {
    outline: none;
  }
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
