import React from 'react';

import logo from 'static/imgs/logo.svg';
import { AppHeader, Logo, Title } from './styles';

const Header = () => (
  <AppHeader>
    <Logo src={logo} alt="logo" />
    <Title>Welcome to React</Title>
  </AppHeader>
);

export default Header;
