import React from 'react';
import { FaCode, FaDownload } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const navItems = [
    { name: 'HOME', to: '/#home' },
    { name: 'ABOUT', to: '/#about' },
    { name: 'SKILLS', to: '/#skills' },
    { name: 'EDUCATION', to: '/#education' },
    { name: 'PROJECTS', to: '/#projects' },
    { name: 'CONTACT', to: '/#contact' },
  ];

  const renderLinks = navItems.map((item) => (
    <li key={item.name}>
      <HashLink
        smooth
        to={item.to}
        className="hover:text-[#FF014F] transition duration-300 block px-2 py-1"
      >
        {item.name}
      </HashLink>
    </li>
  ));

  return (
    <div className="navbar fixed top-0 z-50 backdrop-blur bg-[#1B1E22]/60 text-[#C4CFDE] font-montserrat px-4 md:px-10">
      {/* Left - Logo */}
      <div className="navbar-start flex items-center gap-2">
        <FaCode size={40} className="text-[#FF014F]" />
        <a href="/#home" className="text-xl font-bold text-white select-none hidden sm:block">
          Sourav
        </a>
      </div>

      {/* Center - Desktop Nav Items */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{renderLinks}</ul>
      </div>

      {/* Right - Hamburger and CV button */}
      <div className="navbar-end flex items-center gap-4">
        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-[#212428] rounded-box w-52 space-y-1"
          >
            {renderLinks}
            {/* ✅ Mobile CV Button */}
            <li className="pt-2">
              <a
                href="/your-resume.pdf"
                download
                className="flex items-center gap-2 bg-[#FF014F] text-white px-3 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <FaDownload /> DOWNLOAD CV
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop CV Button */}
        <a
          href="/your-resume.pdf"
          download
          className="hidden lg:flex items-center gap-2 bg-[#FF014F] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          <FaDownload /> DOWNLOAD CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
