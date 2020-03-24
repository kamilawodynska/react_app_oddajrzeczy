import React from 'react';

import Title from '../components/title';
import '../scss/components/aboutUs.scss';

import signature from '../assets/Signature.svg';

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='about-us-container'>
        <div className='title-text'>
          <Title title='O nas' />
          <div className='text'>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </div>
        </div>
        <img className='signature' src={signature} alt='signature' />
      </div>
      <div className='img'></div>
    </section>
  );
};

export default AboutUs;
