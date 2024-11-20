import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="bg-gray-800 h-screen flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-6xl font-bold mb-4">Niv Meir</h1>
      <p className="text-2xl mb-6">Developer Support Engineer & Full-Stack Developer</p>
      <div className="flex justify-center space-x-4">
        <a href="https://linkedin.com/in/niv-meir-0a68b2217" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://github.com/niv2301" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
        </a>
      </div>
      {/* Use 'Link' from react-scroll for smooth scroll */}
      <div className="mt-10">
        <Link to="skills" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
          Scroll Down
        </Link>
      </div>
    </div>
  );
};

export default Header;
