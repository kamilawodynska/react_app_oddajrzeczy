import React from 'react';

import '../scss/components/homeHeader.scss';

import Menu from './Menu';
import Banner from './Banner';

const Header = () => {
  return (
    <header className='header'>
      <Menu />
      <Banner />
    </header>
  );
};

export default Header;
