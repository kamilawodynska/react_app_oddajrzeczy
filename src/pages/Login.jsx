import React from 'react';

import '../scss/components/login.scss';
import Title from '../components/Title';
import { SignInForm } from '../components/LoginForm';

const Login = () => {
  return (
    <section className='login'>
      <section className='login-form-container'>
        <Title title='Zaloguj się' />
        <SignInForm />
      </section>
    </section>
  );
};

export default Login;
