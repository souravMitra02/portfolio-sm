import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const LeftSkillCard = ({ icon: Icon, name, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.4 }}
    className=" text-center gap-3 bg-gray-800 rounded-lg p-3 shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34]"
  >
    <div className={`w-10 h-10 flex mx-auto items-center justify-center bg-gray-700 rounded-full`}>
      <Icon className={`text-xl ${color}`} />
    </div>
    <p className="text-white font-medium">{name}</p>
  </motion.div>
);

const RightSkillCard = ({ icon: Icon, name, color, percentage }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.4 }}
    className="bg-[#1B1E22] rounded-lg p-4 shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34] flex flex-col gap-2"
  >
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full`}>
        <Icon className={`text-xl ${color}`} />
      </div>
      <p className="text-white font-semibold">{name}</p>
      <span className="ml-auto text-gray-300 font-mono">{percentage}%</span>
    </div>
    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-3 bg-blue-600 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontend = [
    { icon: FaHtml5, name: "HTML", color: "text-orange-500", percentage: 95 },
    { icon: FaCss3Alt, name: "CSS", color: "text-blue-500", percentage: 90 },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400", percentage: 85 },
    { icon: FaReact, name: "React", color: "text-cyan-400", percentage: 85 },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400", percentage: 80 },
  ];

  const backend = [
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500", percentage: 80 },
    { icon: SiExpress, name: "Express.js", color: "text-gray-400", percentage: 75 },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600", percentage: 75 },
    { icon: SiFirebase, name: "Firebase", color: "text-yellow-500", percentage: 70 },
  ];

  const tools = [
    { icon: FaFigma, name: "Figma", color: "text-pink-500", percentage: 70 },
    { icon: FaGitAlt, name: "Git", color: "text-orange-600", percentage: 80 },
    { icon: FaGithub, name: "GitHub", color: "text-white", percentage: 85 },
    { icon: SiNetlify, name: "Netlify", color: "text-green-400", percentage: 70 },
    { icon: SiVercel, name: "Vercel", color: "text-white", percentage: 70 },
  ];

  const getSkillsByTab = () => {
    if (activeTab === "frontend") return frontend;
    if (activeTab === "backend") return backend;
    return tools;
  };

  const skills = getSkillsByTab();

  const pairSkills = (arr) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push(arr.slice(i, i + 2));
    }
    return pairs;
  };

  const leftPairs = pairSkills(skills);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {["frontend", "backend", "tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34]"
                  : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
              }
            `}
          >
            {tab === "frontend"
              ? "Frontend"
              : tab === "backend"
              ? "Backend"
              : "Tools & Platforms"}
          </button>
        ))}
      </div>

      {/* Main Cards Container */}
      <div   className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Card */}
        <div className="bg-[#1B1E22] rounded-2xl p-6 shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34]">
          <h3 className="text-xl font-semibold mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-1 gap-4 ">
            {leftPairs.map((pair, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-4 ">
                {pair.map((skill) => (
                  <LeftSkillCard key={skill.name} {...skill} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#1B1E22] rounded-2xl p-6 shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34]">
          <h3 className="text-xl font-semibold mb-6 text-center">Proficiency</h3>
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill) => (
              <RightSkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
