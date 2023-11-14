import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { isMobile, isBrowser } from 'react-device-detect';
import { getGPUTier } from 'detect-gpu';

import {
  About,
  Contact,
  Experience,
  Hero,
  HeroMobile,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from './components';

const App = () => {
  const [hasDedicatedGPU, setHasDedicatedGPU] = useState(false);

  useEffect(() => {
    const checkGPU = async () => {
      try {
        const gpuTier = await getGPUTier();
        // Utilisez la valeur de gpuTier pour prendre des décisions, par exemple :
        if (gpuTier >= 1) {
          // Le GPU est suffisamment puissant, affichez des éléments 3D
          setHasDedicatedGPU(true);
          console.log('Afficher des éléments 3D');
        } else {
          // Le GPU n'est pas assez puissant, affichez une alternative
          setHasDedicatedGPU(false);
          console.log('Afficher une alternative sans éléments 3D');
        }
      } catch (error) {
        console.error('Erreur lors de la détection du GPU :', error);
        // En cas d'erreur, gérer la situation en conséquence
      }
    };

    checkGPU();
  }, []);

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
          {!isMobile && hasDedicatedGPU ? <Hero /> : <HeroMobile />}
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
  );
}

export default App;
