import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// StarWrapper prend deux arguments en entrée : Component et idName. Component est le composant que vous souhaitez envelopper avec des animations, et idName est une chaîne de caractères qui sera utilisée comme identifiant pour un élément HTML.
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section //le composant rendu est un motion.section, un composant de Framer Motion utilisé pour ajouter des animations.
        variants={staggerContainer()} //configure les variations d'animation en utilisant une fonction appelée staggerContainer(). Cela permet d'appliquer des animations avec un délai entre les éléments enfants.
        initial='hidden' //spécifie l'état initial de l'animation comme étant caché
        whileInView='show' //active l'animation lorsque le composant est visible à l'écran
        viewport={{ once: true, amount: 0.25 }} //configure la détection de la vue, lorsque le composant est visible à au moins 25% à l'écran.
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span> //utilisé comme point d'ancrage pour le défilement ou la navigation vers une section spécifique de la page

        <Component />
      </motion.section>
    );
  };
//En utilisant ce HOC, vous pouvez ajouter des animations basées sur Framer Motion à n'importe quel composant en l'enveloppant avec StarWrapper. Vous pouvez ensuite utiliser cet enveloppement pour animer différents composants de votre application.

export default StarWrapper;