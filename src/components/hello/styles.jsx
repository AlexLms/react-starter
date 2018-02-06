import styled from 'styled-components';
import '~/components/globalStyles/globalStyles.js';

const Text = styled.h1`
  font-family: 'pf-regular';
`;
const TextWrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 80px;
  img {
    width: 100%;
  }
`;

export { TextWrap, Text };
