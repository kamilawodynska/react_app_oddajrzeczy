import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/homeUserNav.scss';

const HomeUserNav = () => {
  return (
    <ul className='user-nav'>
      <Link to='/' className='hello-user'></Link>
      <Link to='/logowanie'>Zaloguj</Link>
      <Link to='/rejestracja' className='create-account'>
        Załóż konto
      </Link>
    </ul>
  );
};

export default HomeUserNav;
