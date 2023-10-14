import { BrowserRouter, } from 'react-router-dom';

import { About, Contact, Experience, Hero, HeroMobile, Navbar, Tech, Works, StarsCanvas } from './components';

import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (performance.navigation.type === 1) {
      window.location.href = '/';
    }
  }, []);

  const isMobile = window.innerWidth <= 450;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {!isMobile && <Hero />}
          {isMobile && <HeroMobile />}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
