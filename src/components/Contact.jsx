import React from 'react';

import Title from './Title';
import '../scss/components/contact.scss';

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <div className='contact-form'>
        <Title title='Skontaktuj się z nami' />
        <form className='form'>
          <div className='row'>
            <label className='label'>
              Wpisz swoje imię
              <input type='text' name='name' />
            </label>
            <label className='label'>
              Wpisz swój email
              <input type='email' name='name' />
            </label>
          </div>
        </form>
      </div>
      <footer className='footer'></footer>
    </section>
  );
};

export default Contact;
