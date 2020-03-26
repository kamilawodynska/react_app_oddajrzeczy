import React from 'react';

import Nav from '../components/Nav';
import '../scss/components/login.scss';
import Title from '../components/Title';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <section className='login'>
      <Nav />
      <section className='login-form-container'>
        <Title title='Zaloguj się' />
        <LoginForm />
      </section>
    </section>
  );
};

export default Login;
