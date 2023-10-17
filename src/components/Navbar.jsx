import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';



const Navbar = () => {
  // On commence par définir trois états locaux à l'aide de useState.
  const [active, setActive] = useState(""); // Gère l'élément actif du menu.
  const [toggle, setToggle] = useState(false); // Gère l'état du menu mobile.
  const [scrolled, setScrolled] = useState(false); // Indique si la page a été scrollée.

  // Utilisation de useEffect pour gérer les événements liés au scroll.
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true); // Si la page a été scrollée de plus de 100 pixels, on active l'état "scrolled".
      } else {
        setScrolled(false); // Sinon, on le désactive.
      }
    };

    // Ajout d'un écouteur d'événement "scroll" pour appeler la fonction "handleScroll" lorsque l'utilisateur fait défiler la page.
    window.addEventListener("scroll", handleScroll);

    // Retrait de l'écouteur d'événement lorsque le composant est démonté pour éviter les fuites de mémoire.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Le composant retourne une structure de navigation.
  return (
    <nav
      // La classe CSS est conditionnelle en fonction de l'état "scrolled".
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // Réinitialise l'élément actif du menu.
            window.scrollTo(0, 0); // Fait défiler la page vers le haut.
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>Jordan &nbsp;<span className='sm:block hidden'>| Développeur junior</span></p>
        </Link>
  
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              // La classe CSS est conditionnelle en fonction de l'élément actif.
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)} // Définit l'élément actif au clic.
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
  
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} // L'image affichée dépend de l'état du menu.
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} // Active/désactive le menu mobile au clic.
          />
  
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-tr from-[#4f2d3a] to-[#5950e7]
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  // La classe CSS est conditionnelle en fonction de l'élément actif.
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Ferme le menu mobile au clic.
                    setActive(nav.title); // Définit l'élément actif.
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar