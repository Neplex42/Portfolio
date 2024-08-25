import {
    siteZombieland,
    valrhona,
    postgreSQL,
    zombieland,
    iconZombieland,
    oclock,
    oclock2,
    axome,
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
      title: "HTML, SCSS, EJS",
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
  
  const isMobile = window.innerWidth <= 450;

  const technologies = !isMobile ? [
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
  ] : [{
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
  },];
  
  const experiences = [
    {
      title: "Alternance Développeur front-end Shopify",
      company_name: "Axome",
      icon: axome,
      iconBg: "#FEDAF2",
      date: "Juin 2024 - Maintenant",
      points: [
        "Au sein de mon alternance chez Axome, je me suis spécialisé dans le développement de sites web e-commerce sous Shopify. Mon rôle principal consiste à convertir des maquettes fournies par l'équipe de designers en sites web fonctionnels et esthétiques, en utilisant des technologies telles que JavaScript, SCSS, et Liquid.",
        "En plus de la réalisation des maquettes, je suis également responsable de la mise en place de systèmes modulables qui permettent aux clients d'ajuster et de personnaliser les différentes sections de leurs sites e-commerce selon leurs besoins spécifiques. Cette flexibilité garantit que chaque site développé est non seulement attractif et performant, mais aussi parfaitement adaptable aux préférences et exigences des utilisateurs finaux.",
      ],
    },
    {
      title: "ZombieLand Adventure Park",
      company_name: "Node, express, ejs et scss",
      icon: iconZombieland,
      iconBg: "#000000",
      date: "26 Janvier 2023 - 27 Février 2024",
      points: [
        "Un projet tout juste achevé dans le cadre de ma formation avancée chez O'clock. Cette initiative a consisté à conceptualiser et développer un site dynamique pour un parc d'attractions fictif.",
        "Une semaine dédiée à la création d'un cahier des charges détaillé, incluant la charte graphique et les modèles de données, suivie de trois semaines de développement intensif.",
        "Cette approche bifrontale (front-end et back-end séparés) a permis une grande flexibilité et une meilleure scalabilité du projet, répondant ainsi aux besoins spécifiques de gestion et d'interaction utilisateur du site de ZombieLand.",
      ],
    },
    {
      title: "Formation Développeur Web FullStack",
      company_name: "O'Clock",
      icon: oclock2,
      iconBg: "#0ac3a6",
      date: "Avril 2023 - Février 2024",
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
      name: "Valrhona Collection",
      description:
        "Au cours de mon alternance chez Axome, j'ai eu l'opportunité de réaliser le site e-commerce de Valrhona sur Shopify. Ce projet m'a permis de mettre en pratique mes compétences en développement front-end pour créer une expérience utilisateur fluide et adaptée aux besoins spécifiques de cette marque prestigieuse.",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "Scss",
          color: "blue-text-gradient",
        },
        {
          name: "Liquid",
          color: "pink-text-gradient",
        },
      ],
      image: valrhona,
      source_code_link: "https://www.valrhona-collection.com/",
    },
    {
      name: "ZombieLand.fr",
      description:
        "Mon projet de fin de formation. J'ai pris en charge une variété de tâches, allant de la conception de wireframes à l'implémentation de fonctionnalités clés en front et back-end, comme la gestion des utilisateurs et la sécurisation des sessions. Le projet a culminé avec le lancement réussi du site, enrichissant mon expérience en développement web et gestion de projet.",
      tags: [
        {
          name: "Node.js, Express",
          color: "blue-text-gradient",
        },
        {
          name: "Ejs, scss",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: siteZombieland,
      source_code_link: "https://zombieland.fr/",
    },
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