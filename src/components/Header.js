// import React from 'react';
import { Link } from 'react-scroll';
// import { FaLinkedin, FaGithub } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <div className="bg-gray-800 h-screen flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl font-bold mb-4">Niv Meir</h1>
        <p className="text-2xl mb-6">Software Engineer</p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6 max-w-3xl mx-auto">
  I am a passionate software engineer with a BSc in Information System Engineering from 
  <span className="text-blue-400 font-semibold"> Ben-Gurion University</span>. Driven by curiosity and a commitment to excellence, I bring 
  <span className="font-semibold"> high motivation</span>, <span className="font-semibold">strong problem-solving skills</span>, and the ability to 
  <span className="font-semibold"> learn quickly</span> in dynamic environments. A dedicated <span className="font-semibold">team player</span>, I thrive in collaborative settings and am always eager to embrace new challenges. I am seeking opportunities to contribute to impactful projects and grow as a developer while bringing value through innovative and reliable solutions.
</p>

        {/* <p className="text-1.5xl mb-6">Here's a paragraph tailored for your Header section:
"I am a passionate software engineer with a BSc in Information System Engineering from Ben-Gurion University. 
Driven by curiosity and a commitment to excellence, I bring high motivation, strong problem-solving skills, and the ability to learn quickly in dynamic environments. A dedicated team player, I thrive in collaborative settings and am always eager to embrace new challenges. I am seeking opportunities to contribute to impactful projects and grow as a developer while bringing value through innovative and reliable solutions." 
</p> */}

        <img
            src="/icons/my_profile.jpg"
            alt="Niv Meir"
            className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-md mb-6"
          />
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
    </header>
  );
};

export default Header;


// import React from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className="bg-gray-100 p-6">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Section: Profile Picture & Text */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//           {/* Profile Picture */}
//           <img
//             src="/icons/my_profile.jpg"
//             alt="Niv Meir"
//             className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
//           />
//           {/* Text About You */}
//           <div className="mt-4">
//             <h1 className="text-3xl font-bold">Niv Meir</h1>
//             <p className="text-gray-600 mt-2">
//               Developer Support Engineer | Passionate about Fullstack Development and Problem Solving.
//             </p>
//           </div>
//         </div>

//         {/* Right Section: Icons */}
//         <div className="mt-6 lg:mt-0 flex space-x-6">
//           {/* LinkedIn */}
//           <a
//             href="https://linkedin.com/in/niv-meir-0a68b2217"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-blue-600 text-2xl"
//           >
//             <FaLinkedin />
//           </a>
//           {/* GitHub */}
//           <a
//             href="https://github.com/niv2301"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-black text-2xl"
//           >
//             <FaGithub />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

