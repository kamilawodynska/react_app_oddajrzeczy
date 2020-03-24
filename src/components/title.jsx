import React from 'react';
import '../scss/components/title.scss';

import decor from '../assets/Decoration.svg';

const Title = ({ title }) => {
  return (
    <div className='main-title-container'>
      <h2 className='main-title'>{title}</h2>
      <img src={decor} alt='decoration' className='decoration'></img>
    </div>
  );
};

export default Title;
