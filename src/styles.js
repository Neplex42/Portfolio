const styles = {
  paddingX: "sm:px-16 px-6", // Les propriétés de paddingX définissent les marges horizontales pour différents écrans.
  paddingY: "sm:py-16 py-6", // Les propriétés de paddingY définissent les marges verticales pour différents écrans.
  padding: "sm:px-16 px-6 sm:py-16 py-10", // La propriété de padding définit les marges horizontales et verticales pour différents écrans.

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2", // Style du texte d'en-tête du héros.
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]", // Style du texte de sous-titre du héros.

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]", // Style du texte d'en-tête de section.
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider", // Style du texte de sous-titre de section.
};

// Exporte l'objet styles pour qu'il puisse être utilisé dans d'autres parties du code.
export { styles };
