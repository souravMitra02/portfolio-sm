import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#1B1E22] text-[#C4CFDE] py-16 px-4 md:px-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
        My Experience
      </h2>

      {/* CountUp Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#FF014F] to-[#FFA07A] p-[2px] rounded-xl w-full sm:w-[300px] mx-auto mb-14"
      >
        <div className="bg-[#212428] rounded-xl text-center py-6 px-4">
          <div className="flex justify-center mb-2">
            <FaCode size={28} className="text-[#FF014F]" />
          </div>
          <p className="text-lg mb-1 text-gray-300">Total Experience</p>
          <h1 className="text-5xl font-extrabold text-[#FF014F]">
            <CountUp end={1} duration={3} decimals={1} />{" "}
            <span className="text-xl text-white">Years</span>
          </h1>
        </div>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-[#212428] p-6 md:p-8 rounded-xl shadow-[10px_10px_25px_#0f1012,_-5px_-5px_40px_#292e34] hover:shadow-[0_0_30px_#FF014F] transition-all duration-300"
      >
        <h3 className="text-2xl font-bold text-white mb-3">
          Frontend Developer (Project-Based)
        </h3>
        <p className="text-sm text-gray-400 mb-1">
          <span className="font-semibold text-white">Duration:</span> July 2024 – Present
        </p>
        <p className="text-sm text-gray-400 mb-4">
          <span className="font-semibold text-white">Platform:</span> Programming Hero & Real-World Projects
        </p>
        <ul className="list-disc ml-5 text-gray-300 space-y-2 text-sm">
          <li>
            Developed several responsive full-stack web applications using React,
            Tailwind CSS, Firebase, Express.js, and MongoDB.
          </li>
          <li>
            Built secure authentication systems, protected routes, and clean UI
            with reusable components.
          </li>
          <li>
            Integrated animation libraries like Framer Motion, AOS, and
            typewriter effects for better user experience.
          </li>
          <li>
            Maintained clean Git workflow using GitHub with version control.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
