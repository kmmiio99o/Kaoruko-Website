import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
