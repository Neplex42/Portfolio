import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, internet } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//Ceci est la déclaration du composant ProjectCard qui prend plusieurs propriétés (props) en argument
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    > 
    {/* Crée un conteneur animé avec framer-motion en utilisant les propriétés variants. Cela permet d'appliquer des animations spécifiques à ce conteneur */}
      <div
      onClick={() => window.open(source_code_link, "_blank")}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
      > 
      {/* Crée un composant Tilt qui ajoute un effet d'inclinaison aux éléments qu'il enveloppe. Il est configuré avec des options pour définir l'angle maximal, l'échelle, et la vitesse de l'effet */}
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          /> 
          {/* Affiche une image du projet. L'image est configurée pour être en plein écran avec un effet de coin arrondi */}

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={internet}
                alt='Lien vers le site ou le repo'
                className='w-1/1 h-1/1 object-contain rounded-full'
              />
            </div>
          </div>
        </div> 
        {/* Affiche un bouton "Source Code" qui, lorsqu'il est cliqué, ouvre le lien vers le code source du projet dans un nouvel onglet. Il y a aussi un effet de survol (hover) sur l'image */}

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div> 
        {/* Affiche le nom et la description du projet */}

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; //Ici, les balises HTML sont utilisées pour afficher les étiquettes (tags) du projet. Ces étiquettes sont mappées à partir d'un tableau tags

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}> 
      {/* Crée un conteneur animé pour le titre de la section "Mes Projets" en utilisant textVariant */}
        <p className={`${styles.sectionSubText} `}>Mon travail</p>
        <h2 className={`${styles.sectionHeadText}`}>Mes Projets.</h2>
      </motion.div>

      <div className='w-full flex'>
        <div
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        > 
        {/* Crée un paragraphe animé avec un effet de fondu */}
          Les projets / composants suivants mettent en valeur mes compétences et mon expérience à travers des
          exemples concrets de mon travail. Chaque projet est brièvement décrit avec des
          liens vers des dépôts de code et des démonstrations en direct. Certains projets ont été réalisés grâce à des maquettes comme point de départ.
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
          //<ProjectCard> indique que nous créons une nouvelle instance du composant ProjectCard.
          //key est utilisée pour aider React à identifier chaque élément de la liste lors du rendu, clé est générée dynamiquement en utilisant l'index du projet dans le tableau, garantit que chaque carte de projet a une clé unique.
          //L'index est utilisé pour déterminer le délai d'animation de la carte du projet.
          //{...project} est utilisée pour extraire toutes les propriétés de l'objet project et les passer comme des propriétés individuelles au composant ProjectCard. Ainsi, chaque propriété de project (telles que name, description, tags, image, source_code_link) devient une propriété distincte dans ProjectCard.
        ))}
      </div> 
      {/* Crée un conteneur pour les cartes de projet. */}
    </>
  );
};

export default SectionWrapper(Works, "");