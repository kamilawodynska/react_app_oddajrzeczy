import React from 'react';

import '../scss/components/nav.scss';
import Menu from '../components/Menu';
import UserNav from '../components/UserNav';

const Nav = () => {
  return (
    <nav className='nav'>
      <UserNav />
      <Menu />
    </nav>
  );
};

export default Nav;
