import React from 'react';
import '../scss/components/home.scss';

import Header from '../components/Header';
import ThreeColumns from '../components/ThreeColumns';
import FourSteps from '../components/FourSteps';
import AboutUs from '../components/AboutUs';
import Help from '../components/Help';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
      <Help />
      <Contact />
    </div>
  );
};

export default Home;
