import React from 'react';

import '../scss/components/homeHeader.scss';

import HomeUserNav from './homeUserNav';
import HomeNav from './homeNav';

const HomeHeader = () => {
  return (
    <header className='header'>
      <HomeUserNav />
      <HomeNav />
    </header>
  );
};

export default HomeHeader;
