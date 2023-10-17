import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    // Cette fonction retourne un composant React appelé "Tech".
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* On commence par un conteneur div qui contient les éléments tech. Il utilise Flexbox pour les disposer horizontalement. */}
      {technologies.map((technology) => (
        //On mappe chaque élément de la liste "technologies" pour générer un élément graphique pour chaque technologie
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} /> 
          {/* On utilise le composant "BallCanvas" pour afficher l'icône de la technologie correspondante. */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");