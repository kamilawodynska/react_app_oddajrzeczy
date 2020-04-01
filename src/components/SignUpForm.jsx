import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../firebase/base';

import '../scss/components/login.scss';
import Button from './Button';

const SignUpForm = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <form className='form' onSubmit={handleSignUp}>
      <div className='labels'>
        <label className='label'>
          Email
          <input name='email' type='email' />
        </label>
        <label className='label'>
          Hasło
          <input name='password' type='password' />
        </label>
        {/* <label className='label'>
          Powtórz hasło
          <input name='password' type='password' />
        </label> */}
      </div>
      <div className='buttons-login-form'>
        <Button text='Zaloguj się' href='logowanie' />
        <button type='submit'>Załóż konto</button>
      </div>
    </form>
  );
};

export default withRouter(SignUpForm);
