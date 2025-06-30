import React from 'react';
import {
  FaCode, FaDownload, FaHome, FaUser, FaTools,
  FaGraduationCap, FaProjectDiagram, FaEnvelope
} from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const navItems = [
    { name: 'HOME', to: '/#home', icon: <FaHome /> },
    { name: 'ABOUT', to: '/#about', icon: <FaUser /> },
    { name: 'SKILLS', to: '/#skills', icon: <FaTools /> },
    { name: 'EDUCATION', to: '/#education', icon: <FaGraduationCap /> },
    { name: 'PROJECTS', to: '/#projects', icon: <FaProjectDiagram /> },
    { name: 'CONTACT', to: '/#contact', icon: <FaEnvelope /> },
  ];

  const renderLinks = navItems.map((item) => (
    <li key={item.name}>
      <HashLink
        smooth
        to={item.to}
        className="group relative px-3 py-2 flex justify-center items-center"
      >
        {/* Mobile: icon only | Desktop: text only */}
        <span className="block lg:hidden text-xl group-hover:text-[#FF014F] transition-all duration-300">
          {item.icon}
        </span>
        <span className="hidden lg:inline group-hover:text-[#FF014F] transition-all duration-300">
          {item.name}
        </span>
        {/* Bottom Border on hover/active (visual cue) */}
        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#FF014F] transition-all duration-300"></span>
      </HashLink>
    </li>
  ));

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#1B1E22]/60 text-[#C4CFDE] font-montserrat px-4 md:px-10">
      {/* Left - Logo */}
      <div className="navbar-start flex items-center gap-2">
        <FaCode size={36} className="text-[#FF014F]" />
        <a href="/#home" className="text-xl font-bold text-white select-none hidden sm:block">
          Sourav
        </a>
      </div>

      {/* Center - Nav Items */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
          {renderLinks}
        </ul>
      </div>

      {/* Right - CV Button */}
      <div className="navbar-end">
        <a
          href="/your-resume.pdf"
          download
          className="flex items-center gap-2 bg-[#FF014F] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform text-sm"
        >
          <FaDownload /> <span className="hidden sm:inline">DOWNLOAD CV</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
