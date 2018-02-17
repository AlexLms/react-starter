import React from 'react';
import Mac from '~/files/img/mac.jpg';
import { TextWrap, Text } from './styles';


const Hello = () => (
  <TextWrap>
    <Text>Hello World</Text>
    <img src={Mac} alt="" />
  </TextWrap>
);


export default Hello;
