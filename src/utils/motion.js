// Cette fonction génère des variations d'animations pour les éléments de texte. Elle définit deux états, "hidden" (caché) et "show" (affiché), avec des transformations pour déplacer le texte et le faire apparaître de manière fluide. Vous pouvez spécifier un délai (delay) pour retarder le début de l'animation.
export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  // Cette fonction génère des variations d'animations pour les éléments qui apparaissent en fondu. Vous pouvez spécifier la direction depuis laquelle l'élément apparaît, le type d'animation, le délai et la durée de l'animation.
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Cette fonction génère des variations d'animations pour les éléments qui apparaissent en zoomant. Elle anime le changement d'échelle et l'opacité de l'élément. Vous pouvez spécifier un délai et une durée pour l'animation.
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Cette fonction génère des variations d'animations pour les éléments qui apparaissent en glissant. Vous pouvez spécifier la direction de glissement, le type d'animation, le délai et la durée de l'animation.
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Cette fonction génère des variations d'animations pour les conteneurs d'éléments où chaque élément enfant est animé avec un décalage (staggerChildren) et un délai (delayChildren). Cela permet de créer des animations de groupe avec un décalage entre chaque élément.
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };