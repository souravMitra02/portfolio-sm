import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#1B1E22] text-[#C4CFDE] px-4 md:px-12 py-16"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl"
      >
        <div
          className="p-8 rounded-lg bg-[#1C1F24] shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34] hover:shadow-[0_0_30px_#FF014F] transition-all duration-300"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-6 px-4">
            About Me
          </h3>

          <p className="text-red-500 text-center">
            VISIT MY PORTFOLIO & HIRE ME
          </p>

          <p className="poppins leading-7 tracking-wide text-sm md:text-base text-justify mt-6">
            Hi! I’m{" "}
            <span className="text-white font-semibold">Sourav Mitra</span>, a
            curious learner who finds joy in building with code. My journey
            didn’t begin with a degree, just a deep interest in how websites
            work — buttons, colors, and animations. That led me from HTML to
            React, step by step. Now I work as a{" "}
            <span className="text-white font-semibold">Frontend Developer</span>{" "}
            with a passion for the MERN stack. I enjoy creating responsive,
            smooth, and interactive user experiences. When not coding, I love
            sports, sketching, and quiet thinking. These refresh my creativity.
            I believe good developers are lifelong learners and good listeners.
            I’m growing every day — as a developer and as a person.
          </p>

          <p className="italic text-sm text-gray-400 text-center mt-6">
            Thanks for visiting — I’m excited for what lies ahead in this
            journey.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
