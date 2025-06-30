import React from 'react';
import image from '../assets/banner.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Facebook, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-[#1B1E22] min-h-screen flex flex-col justify-center" id="home">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        <motion.div
          className="space-y-4 flex-1"
          initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
        >
          <p className="montserrat text-[#C4CFDE]">WELCOME TO MY WORLD..!!</p>

          <h3 className="text-4xl md:text-5xl font-bold poppins text-white">
  Hi, I’m <span className="text-[#FF014F]">Sourav Mitra</span>
</h3>

<h3 className="text-2xl md:text-3xl font-semibold text-white montserrat">
  I’m a{' '}
  <span className="text-[#E6003C]">
    <Typewriter
      words={[
        'Frontend Developer',
        'React Developer',
        'MERN Stack Developer',
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={1500}
    />
  </span>
</h3>


          <p className="text-[#C4CFDE] poppins">
  As a passionate new developer, I’m focused on learning modern web technologies and building clean, responsive user interfaces. Every project helps me grow, and I’m excited to keep learning and improving every day.
</p>

        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
        >
          <img className="w-72 md:w-80 rounded-full border-4 border-white mx-auto" src={image} alt="Sourav Mitra" />
        </motion.div>
      </div>


<div className="space-y-4 mt-10 md:mt-0 lg:mt-0 text-center md:text-start lg:text-start">
  <h2 className="montserrat text-[#C4CFDE] text-lg">FIND WITH ME</h2>
  <div className="flex gap-5  justify-center md:justify-start lg:justify-start">
    
    <motion.a
      href="https://www.facebook.com/its.me.souravmitra/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-[#1c1f24] rounded-lg shadow-[8px_8px_20px_#0f1012,_-8px_-8px_20px_#292e34]"
    >
      <Facebook size={20} color="#C4CFDE" strokeWidth={1.5} />
    </motion.a>

   
    <motion.a
      href="https://www.linkedin.com/in/sourav-mitra-026852315/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-[#1c1f24] rounded-lg shadow-[8px_8px_20px_#0f1012,_-8px_-8px_20px_#292e34]"
    >
      <Linkedin size={20} color="#C4CFDE" strokeWidth={1.5} />
    </motion.a>

    <motion.a
      href="https://github.com/souravMitra02/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-[#1c1f24] rounded-lg shadow-[8px_8px_20px_#0f1012,_-8px_-8px_20px_#292e34]"
    >
      <Github size={20} color="#C4CFDE" strokeWidth={1.5} />
    </motion.a>
  </div>
</div>
    </section>
  );
};

export default Banner;
