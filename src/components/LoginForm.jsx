import React from 'react';

import '../scss/components/loginForm.scss';
import Button from './Button';

const LoginForm = ({ onSubmit }) => {
  return (
    <form className='login-form' onSubmit={onSubmit}>
      <div className='labels'>
        <label className='label'>
          E-mail
          <input name='email' type='email' />
        </label>
        <label className='label'>
          Hasło
          <input name='password' type='password' />
        </label>
      </div>
      <div className='buttons-form'>
        <Button text='Załóż konto' href='rejestracja' />
        <Button text='Zaloguj się' href='/' />
      </div>
    </form>
  );
};

export default LoginForm;
