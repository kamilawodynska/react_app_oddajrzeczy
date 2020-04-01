import React from 'react';

import '../scss/components/fourSteps.scss';

import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';
import Title from './Title';
import Button from './Button';

const FourSteps = () => {
  return (
    <section className='four-steps' id='four-steps'>
      <Title title='Wystarczą 4 proste kroki' />
      <div className='steps-container'>
        <div className='steps'>
          <div className='step'>
            <img src={icon1} alt='t-shirt' />
            <div className='title'>Wybierz rzeczy</div>
            <div className='line'></div>
            <div className='text'>ubrania, zabawki, sprzęt i inne</div>
          </div>
          <div className='step'>
            <img src={icon2} alt='bag' />
            <div className='title'>Spakuj je</div>
            <div className='line'></div>
            <div className='text'>skorzystaj z worków na śmieci</div>
          </div>
          <div className='step'>
            <img src={icon3} alt='loupe' />
            <div className='title'>Zdecyduj komu chcesz pomóc</div>
            <div className='line'></div>
            <div className='text'>wybierz zaufane miejsce</div>
          </div>
          <div className='step'>
            <img src={icon4} alt='loop' />
            <div className='title'>Zamów kuriera</div>
            <div className='line'></div>
            <div className='text'>kurier przyjedzie w dogodnym terminie</div>
          </div>
        </div>
      </div>
      <Button text='oddaj rzeczy' href='oddaj-rzeczy'></Button>
    </section>
  );
};

export default FourSteps;
