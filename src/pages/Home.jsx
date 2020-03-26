import React from 'react';
import '../scss/components/home.scss';

import Header from '../components/Header';
import FourSteps from '../components/FourSteps';
import AboutUs from '../components/AboutUs';
import ThreeColumns from '../components/ThreeColumns';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
