import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../firebase/base';
import { AuthContext } from '../firebase/Auth';

import '../scss/components/login.scss';
import Button from './Button';

const LoginForm = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/oddaj-rzeczy');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/oddaj-rzeczy' />;
  }

  return (
    <form className='form' onSubmit={handleLogin}>
      <div className='labels'>
        <label className='label'>
          Email
          <input name='email' type='email' />
        </label>
        <label className='label'>
          Hasło
          <input name='password' type='password' />
        </label>
      </div>
      <div className='buttons-login-form'>
        <Button text='Załóż konto' href='rejestracja' />
        <Button text='Zaloguj się' href='oddaj-rzeczy' type='submit' />
      </div>
    </form>
  );
};

export default withRouter(LoginForm);
