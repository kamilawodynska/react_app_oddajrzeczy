import React from 'react';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

import '../scss/components/footer.scss';

const Footer = () => {
  return (
    <section className='footer'>
      <div></div>
      <div className='copyright'>Copyright by Coders Lab</div>
      <div className='social'>
        <a href='#'>
          <img className='social-icon' src={facebook} alt='icon-facebook' />
        </a>
        <a href='#'>
          <img className='social-icon' src={instagram} alt='icon-instagram' />
        </a>
      </div>
    </section>
  );
};

export default Footer;
