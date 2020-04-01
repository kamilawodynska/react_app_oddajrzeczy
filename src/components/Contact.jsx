import React from 'react';

import Title from './Title';
import ContactForm from './ContactForm';
import '../scss/components/contact.scss';
import Footer from './Footer';

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <div className='contact-form-container'>
        <Title title='Skontaktuj się z nami' />
        <ContactForm />
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
