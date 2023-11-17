import { motion } from "framer-motion";

import { styles } from "../styles";
import { CarCanvas } from "./canvas";
import React, { useEffect, useState } from 'react';
import { isMobile, isBrowser } from 'react-device-detect';
import { getGPUTier } from 'detect-gpu';

const Hero = () => {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    const checkGPU = async () => {
      try {
        const gpuTier = await getGPUTier();
        console.log('GPU Tier:', gpuTier.tier);
        console.log('Is Mobile:', gpuTier.isMobile);
        console.log('FPS:', gpuTier.fps);
        console.log('GPU:', gpuTier.gpu);
  
        // Utilisez la valeur de gpuTier pour prendre des décisions
        if (gpuTier.tier >= 1 && gpuTier.fps >=50) {
          // Le GPU est suffisamment puissant, affichez des éléments 3D
          setShouldRender3D(true);
        } else {
          // Le GPU n'est pas assez puissant, affichez une alternative
          setShouldRender3D(false);
        }
      } catch (error) {
        console.error('Erreur lors de la détection du GPU :', error);
        // Gérer les erreurs en conséquence
      }
    };
  
    checkGPU();
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
    {/* Crée une section avec une largeur maximale de 100% et une hauteur équivalente à la hauteur de l'écran. */}

      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
      {/* // Crée un conteneur positionné de manière absolue qui couvre toute la section. */}
      {/* // Il est centré horizontalement et a une marge en haut de 120 pixels. */}

        <div className='flex flex-col justify-center items-center mt-5'>
        {/* // Crée un conteneur flexible avec une disposition en colonnes, centré verticalement et horizontalement. */}
        {/* // Il a une marge en haut de 5 pixels. */}

          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          {/* // Affiche un cercle avec une largeur et une hauteur de 5 pixels et un fond coloré. */}

          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          {/* // Affiche un élément avec une classe CSS "violet-gradient". Il peut s'agir d'un dégradé violet. */}
        </div>
        <div>

          <h1 className={`${styles.heroHeadText} text-white`}>
          {/* // Affiche un titre avec des styles provenant de "styles.heroHeadText" et du texte blanc. */}
            Salut, <span className='text-[#915EFF]'>Je suis Jordan</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {/* // Affiche un paragraphe avec des styles provenant de "styles.heroSubText" et du texte blanc. */}
            Je développe des interfaces<br className='sm:block hidden' />
             utilisateur et des applications web.
          </p>
        </div>
      </div>
      {setShouldRender3D ? <CarCanvas /> : null}

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
      {/* Crée un conteneur positionné de manière absolue en bas de la section, centré horizontalement et verticalement. */}

        <a href="#about">
        {/* // Crée un lien qui redirige vers la section avec l'ID "about". */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          {/* // Crée un conteneur avec une bordure, arrondi et stylé. */}

            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1"/>
            {/* // Utilise une animation framer-motion pour animer un élément. */}

          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero
