import React from 'react';
import '../scss/components/home.scss';

import HomeHeader from './homeHeader';
import FourSteps from './fourSteps';
import AboutUs from './aboutUs';
import ThreeColumns from './threeColumns';

const Home = () => {
  return (
    <div className='home'>
      <HomeHeader />
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
    </div>
  );
};

export default Home;
