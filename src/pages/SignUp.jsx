import React from 'react';

import Title from '../components/Title';
import '../scss/components/login.scss';
import { SignUpForm } from '../components/SignUpForm';

const SignUp = () => {
  return (
    <section className='login'>
      <section className='login-form-container'>
        <Title title='Załóż konto' />
        <SignUpForm />
      </section>
    </section>
  );
};

export default SignUp;
