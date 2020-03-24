import React from 'react';

import '../scss/components/button.scss';

const Button = ({ text }) => {
  return (
    <button className='button'>
      <a href='/logowanie'>{text}</a>
    </button>
  );
};

export default Button;
