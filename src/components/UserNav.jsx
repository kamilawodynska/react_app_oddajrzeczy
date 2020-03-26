import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <ul className='menu user-menu'>
      <Link className='link hello-user' to='/'></Link>
      <Link className='link' to='/logowanie'>
        Zaloguj
      </Link>
      <Link className='link create-account' to='/rejestracja'>
        Załóż konto
      </Link>
    </ul>
  );
};

export default UserNav;
