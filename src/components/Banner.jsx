import React from 'react';

import Title from '../components/Title';
import '../scss/components/banner.scss';
import Button from '../components/Button';

const Banner = () => {
  return (
    <section className='banner'>
      <Title
        title={`Zacznij pomagać!\n Oddaj niechciane rzeczy w zaufane ręce`}
      />
      <div className='buttons'>
        <Button className='button' text={`ODDAJ\n RZECZY`} href='logowanie' />
        <Button clasname='button' text='ZORGANIZUJ ZBIÓRKĘ' href='logowanie' />
      </div>
    </section>
  );
};

export default Banner;
