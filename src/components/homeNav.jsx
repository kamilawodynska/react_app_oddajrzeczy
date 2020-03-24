import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/homeNav.scss';

const HomeNav = () => {
  return (
    <ul className='nav'>
      <Link className='link' to='#start'>
        Start
      </Link>
      <Link className='link' to='#about'>
        O co chodzi?
      </Link>
      <Link className='link' to='#about-us'>
        O nas
      </Link>
      <Link className='link' to='#fundation-organizations'>
        Fundacja i organizacje
      </Link>
      <Link className='link' to='#contact'>
        Kontakt
      </Link>
    </ul>
  );
};

export default HomeNav;
