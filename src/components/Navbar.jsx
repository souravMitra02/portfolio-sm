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
      {/* Left - Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost p-1 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
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
        <FaCode size={40}  className="text-[#FF014F]" />
      </div>

      {/* Center - Desktop Nav Items */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{renderLinks}</ul>
      </div>

      {/* Right - Desktop CV Button */}
      <div className="navbar-end hidden lg:flex">
        <a
          href="/your-resume.pdf"
          download
          className="btn bg-[#FF014F] text-white border-none rounded-full px-4 py-2 hover:scale-105 transition"
        >
          <FaDownload className="mr-2" /> DOWNLOAD CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
