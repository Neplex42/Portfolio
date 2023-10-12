import {
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
      title: "Passionné par Three.Js, Fiber, Drei",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
        "Maîtrise des Technologies Web : J'ai consolidé mes compétences en développement web en explorant des technologies telles que React, Three.js, Fiber et Drei. J'ai acquis une solide compréhension de la création de composants interactifs et de la gestion d'événements en utilisant React. De plus, j'ai appris à manipuler des éléments 3D, gérer des animations et des lumières, et à créer des expériences visuellement captivantes.",
        "Intégration et Utilisation de Bibliothèques Tierces : J'ai perfectionné ma capacité à intégrer des bibliothèques tierces, à les comprendre et à les exploiter efficacement. Cela inclut des compétences en intégration de React Router pour la gestion de la navigation et l'utilisation de bibliothèques telles que Drei pour enrichir les fonctionnalités de mes projets.",
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };