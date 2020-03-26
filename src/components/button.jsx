import React from 'react';

import '../scss/components/button.scss';

const Button = ({ text, href }) => {
  return (
    <button className='button'>
      <a href={`/${href}`}>{text}</a>
    </button>
  );
};

export default Button;
