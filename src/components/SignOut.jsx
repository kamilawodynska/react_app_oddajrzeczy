import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import { withFirebase } from '../firebase/index';

const SignOutButton = ({ firebase }) => (
  <Link
    className='link'
    type='button'
    onClick={firebase.doSignOut}
    to={ROUTES.LOGOUT}
  >
    Wyloguj
  </Link>
);

export default withFirebase(SignOutButton);
