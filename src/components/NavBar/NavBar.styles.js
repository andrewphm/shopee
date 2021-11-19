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
  flex: 1;
`;
export const Center = styled.div`
  flex: 1;
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
`;
