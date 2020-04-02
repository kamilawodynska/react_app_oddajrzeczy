import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../components/Session';
import * as ROUTES from '../constants/routes';
import SignOutButton from '../components/SignOut';

import '../scss/components/nav.scss';

const UserNav = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <UserNavAuth authUser={authUser} /> : <UserNavNonAuth />
    }
  </AuthUserContext.Consumer>
);

const UserNavAuth = ({ authUser }) => (
  <ul className='menu user-menu'>
    <Link className='link hello-user' to={ROUTES.HOME}>
      Cześć {authUser.email}!
    </Link>
    <Link className='link give-away' to={ROUTES.GIVESTUFF}>
      Oddaj rzeczy
    </Link>
    <SignOutButton />
  </ul>
);

const UserNavNonAuth = () => (
  <ul className='menu user-menu'>
    <Link className='link' to={ROUTES.SIGN_IN}>
      Zaloguj
    </Link>
    <Link className='link create-account' to={ROUTES.SIGN_UP}>
      Załóż konto
    </Link>
    <Link className='link' to={ROUTES.HOME}>
      Strona główna
    </Link>
  </ul>
);

export default UserNav;
