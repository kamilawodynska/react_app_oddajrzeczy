import React from 'react';

import Nav from '../components/Nav';
import '../scss/components/logOut.scss';
import Title from '../components/Title';
import Button from '../components/Button';

const LogOut = () => {
  return (
    <section className='log-out'>
      <Nav />
      <div className='log-out-container'>
        <Title title={`Wylogowanie nastąpiło\n pomyślnie!`} />
        <Button text='Strona główna' href=' ' />
      </div>
    </section>
  );
};

export default LogOut;
