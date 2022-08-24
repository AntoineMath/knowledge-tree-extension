import React from 'react';
import Navigation from '../components/Navigation';
import AppPresentation from '../components/AppPresentation';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <AppPresentation />
    </div>
  );
};

export default Home;