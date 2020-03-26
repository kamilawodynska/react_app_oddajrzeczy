import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Menu = () => {
  return (
    <ul className='menu'>
      <Link className='link start' to='#start'>
        Start
      </Link>
      <Link
        className='link'
        activeClass='active'
        to='four-steps'
        spy={true}
        smooth={true}
        // offset={-70}
        duration={500}
      >
        O co chodzi?
      </Link>
      <Link
        className='link'
        activeClass='active'
        to='about-us'
        spy={true}
        smooth={true}
        // offset={-70}
        duration={500}
      >
        O nas
      </Link>
      <Link
        className='link'
        activeClass='active'
        to='fundation-organizations'
        spy={true}
        smooth={true}
        // offset={-70}
        duration={500}
      >
        Fundacja i organizacje
      </Link>
      <Link
        className='link'
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        // offset={-70}
        duration={500}
      >
        Kontakt
      </Link>
    </ul>
  );
};

export default Menu;
