import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import '../scss/components/logOut.scss';
import Title from '../components/Title';

const LogOut = () => {
  return (
    <section className='log-out'>
      <div className='log-out-container'>
        <Title title={`Wylogowanie nastąpiło\n pomyślnie!`} />
        <Link className='button' to={ROUTES.HOME}>
          Strona główna
        </Link>
      </div>
    </section>
  );
};

export default LogOut;
