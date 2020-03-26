import React from 'react';

import '../scss/components/homeHeader.scss';

import Banner from './Banner';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='header'>
      <Nav />
      <Banner />
    </header>
  );
};

export default Header;
