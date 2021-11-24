import styled from 'styled-components';
//media queries
import { mobile, tablet } from '../../responsive';

export const Container = styled.div`
  height: 60px;
  color: black;

  ${mobile({
    height: '100%',
    marginBottom: '2rem',
  })}
`;

export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    padding: '10px',
    flexDirection: 'column',
    rowGap: '.5rem',
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({
    order: '2',
  })}
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

  ${mobile({
    display: 'none',
  })}
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({
    marginLeft: '0px',
  })}
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
