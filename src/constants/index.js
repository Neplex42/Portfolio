import {
    postgreSQL,
    oclock,
    oclock2,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    portfolio,
    sitee,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "HTML, SCSS, Tailwind",
      icon: web,
    },
    {
      title: "Développeur React Native",
      icon: mobile,
    },
    {
      title: "Node.js et PostgreSQL",
      icon: backend,
    },
    {
      title: "Intéressé par Three.Js, Fiber, Drei",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgreSQL,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Formation Développeur Web FullStack",
      company_name: "O'Clock",
      icon: oclock2,
      iconBg: "#0ac3a6",
      date: "Depuis Avril 2023",
      points: [
        "Pré qualification et validation compétence professionnelle savoir faire et savoir être chez Histya",
        "Actuellement, je suis inscrit à la formation Full Stack / Accessibilité de l'école O'Clock, où j'acquiers des compétences essentielles en développement web. J'apprends à maîtriser des technologies telles que HTML, CSS, JavaScript, Node.js, PostgreSQL, React, tout en mettant un fort accent sur l'accessibilité pour rendre les applications web plus inclusives.",
      ],
    },
    {
      title: "Création de ce portfolio",
      company_name: "React, three, fiber et drei",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Octobre 2023",
      points: [
        "Maîtrise des Technologies Web : J'ai consolidé mes compétences en développement web en explorant React, Three.js, Fiber, et Drei, en créant des composants interactifs et des expériences visuellement captivantes.",
        "Intégration de Bibliothèques Tierces : J'ai renforcé ma capacité à intégrer et exploiter efficacement des bibliothèques tierces, comme React Router et Drei, pour améliorer mes projets.",
        "Compétences en Résolution de Problèmes et Communication : J'ai développé ma capacité à résoudre des problèmes complexes et comprendre comment les résoudres.",
      ],
    },
    {
      title: "Création site e-commerce",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Décembre 2019 - Juillet 2020",
      points: [
        "Création complète d'un site e-commerce sur la plateforme Shopify, de sa conception initiale à son maintien à long terme. ",
        "En outre, j'étais responsable du service client et de la gestion des problèmes après-vente, garantissant une expérience client optimale.",
        "Mise en œuvre de campagnes publicitaires efficaces, utilisant des outils tels que Facebook Ads et Google Ads, tout en mettant un fort accent sur l'optimisation du référencement (SEO). ",
        "Mon dévouement et mes compétences ont contribué à la croissance et au succès de l'entreprise.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Mon portfolio",
      description:
        "Ce projet a débuté avec des influences d'un projet existant, mais il a rapidement pris sa propre identité grâce à des modifications significatives. En m'inspirant de la palette de couleurs et de la charte graphique d'origine, j'ai repensé et personnalisé le projet pour qu'il corresponde davantage à mes préférences. J'ai également profité de cette occasion pour approfondire mes compétences dans divers langages et technologies que je ne connaissais pas auparavant.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js, fiber, drei",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Neplex42/Portfolio",
    },
    {
      name: "My-broderie-diamant",
      description:
        "Création complète d'un site e-commerce sur Shopify, de la conception initiale à la maintenance à long terme. Gestion du service client et résolution des problèmes après-vente pour une expérience client optimale. Réalisation de campagnes publicitaires efficaces avec Facebook Ads et Google Ads, tout en mettant l'accent sur l'optimisation du référencement (SEO). Mon dévouement et mes compétences ont contribué à la croissance et au succès de l'entreprise.",
      tags: [
        {
          name: "SEO et SEA",
          color: "blue-text-gradient",
        },
        {
          name: "Sav",
          color: "green-text-gradient",
        },
        {
          name: "Service client",
          color: "pink-text-gradient",
        },
      ],
      image: sitee,
      source_code_link: "https://my-broderie-diamant.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };