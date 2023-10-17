import { BrowserRouter } from 'react-router-dom'; 

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
} from './components'; // Importe les composants de l'application depuis le dossier 'components'.

import React, { useEffect } from 'react'; // Importe React et la fonction useEffect pour les effets secondaires.

const App = () => { //App est utiliser dans main.jsx
  useEffect(() => { // Dans ce cas, useEffect est utilisé pour exécuter du code lorsque le composant App est monté
    if (performance.navigation.type === 1) { //vérifie si le type de navigation est un rechargement de la page.
      window.location.href = '/'; // Retour vers la page d'accueil 
    }
  }, []); // Le fait de passer une liste vide [] comme deuxième argument à useEffect signifie que cette vérification et redirection ne se produit qu'une seule fois lors du montage initial du composant App, que l'effet ne dépend d'aucune variable particulière et doit être exécuté uniquement lors du montage du composant.

  const isMobile = window.innerWidth <= 450; // Vérifie si la largeur de la fenêtre est inférieure ou égale à 450 pixels, ce qui détermine si l'utilisateur est sur un appareil mobile.

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {!isMobile && <Hero />} {/* Rend le composant 'Hero' s'il ne s'agit pas d'un appareil mobile. */}
          {isMobile && <HeroMobile />} {/* Rend le composant 'HeroMobile' s'il s'agit d'un appareil mobile. */}
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

export default App; // Exporte le composant App en tant que composant racine de l'application.
