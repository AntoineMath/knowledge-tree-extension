import React from 'react';
import Navigation from '../components/Navigation';
import App_presentation from '../components/App_presentation';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <App_presentation />
    </div>
  );
};

export default Home;