import styled, { keyframes } from 'styled-components';

export const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const rotate360 = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;
export const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-family: 'stem-bold';
`;
