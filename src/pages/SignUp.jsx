import React from 'react';

import Title from '../components/Title';
import Nav from '../components/Nav';
import '../scss/components/login.scss';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  return (
    <section className='login'>
      <Nav />
      <section className='login-form-container'>
        <Title title='Załóż konto' />
        <SignUpForm />
      </section>
    </section>
  );
};

export default SignUp;
