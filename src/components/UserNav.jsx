import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../firebase/Auth';

const UserNav = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <ul className='menu user-menu'>
        <Link className='link hello-user' to='/'>
          Cześć!
        </Link>
        <Link className='link give-away' to='/oddaj-rzeczy'>
          Oddaj rzeczy
        </Link>
        <Link className='link' to='/wylogowano'>
          Wyloguj
        </Link>
      </ul>
    );
  }

  return (
    <ul className='menu user-menu'>
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
