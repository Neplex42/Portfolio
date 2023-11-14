import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { isMobile, isBrowser } from 'react-device-detect';
import { getGPUTier } from 'detect-gpu';

// const isMobile = window.innerWidth <= 450;

const Contact = () => {
  const [hasDedicatedGPU, setHasDedicatedGPU] = useState(false);

  useEffect(() => {
    const checkGPU = async () => {
      try {
        const gpuTier = await getGPUTier();
        // Utilisez la valeur de gpuTier pour prendre des décisions, par exemple :
        if (gpuTier >= 1) {
          // Le GPU est suffisamment puissant, affichez des éléments 3D
          setHasDedicatedGPU(true);
          console.log('Afficher des éléments 3D');
        } else {
          // Le GPU n'est pas assez puissant, affichez une alternative
          setHasDedicatedGPU(false);
          console.log('Afficher une alternative sans éléments 3D');
        }
      } catch (error) {
        console.error('Erreur lors de la détection du GPU :', error);
        // En cas d'erreur, gérer la situation en conséquence
      }
    };

    checkGPU();
  }, []);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs
      .send(
        'service_0e5b8ph',
        'template_5ohajrg',
        {
          from_name: form.name,
          to_name: "Jordan",
          from_email: form.email,
          to_email: "jordan.david01234@gmail.com",
          message: form.message,
        },
        'KpCqLhxUn-KswaSTj'
      )
      .then( 
        () => {
          setLoading(false);
          alert("Je vous remercie. Je reviendrai vers vous dès que possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, quelque chose n'a pas fonctionné. Veuillez réessayer.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex-auto xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[2.75] bg-black-100 mx-20 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Prendre contact</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre nom</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Quelle est votre adresse email ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Que voulez-vous dire ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* {!isMobile && <EarthCanvas />} */}
        {!isMobile && hasDedicatedGPU ? <EarthCanvas /> : null}
        {isMobile && <></>}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
