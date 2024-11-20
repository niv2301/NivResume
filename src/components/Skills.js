import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Unity', icon: '/icons/unity.svg' },
  { name: 'C#', icon: '/icons/csharp.svg' },
  { name: 'HTML', icon: '/icons/html.svg' },
  { name: 'CSS', icon: '/icons/css.svg' },
  { name: 'Vue', icon: '/icons/vue.svg' },
  { name: 'C++', icon: '/icons/cplusplus.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  // Add more skills here
];

const SkillsCarousel = () => {
  const settings = {
    arrows: false,
    pauseOnHover: true,
    dots: false,            // Show navigation dots
    infinite: true,        // Enable infinite looping
    speed: 4000,            // Animation speed in milliseconds
    slidesToShow: 5,       // Number of slides to show at once
    slidesToScroll: 1,     // Number of slides to scroll at a time
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 0,   // Time in milliseconds between each slide (2 seconds)
    cssEase: "linear",      // Use linear easing for a smoother feel
    centerMode: true,        // Centers the slides and provides a continuous effect
  };
  
  return (
    <div id="skills" className="bg-white py-20 text-center">
      <h2 className="text-4xl font-semibold mb-8">My Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
            <p className="w-12 h-12 mb-2">{skill.name} </p>
            
          </div>
        ))}
      </Slider>
    </div>

    // <div id="skills" className="bg-white py-20 text-center">
    //   <h2 className="text-4xl font-semibold mb-8">My Skills</h2>
    //   <Slider {...settings}>
    //   <div className="flex flex-wrap justify-center">
    //     {skills.map((skill, index) => (
    //       <div key={index} className="flex flex-col items-center m-4">
    //         <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
    //         <p className="text-lg">{skill.name}</p>
    //       </div>
    //     ))}
    //   </div>
    //   </Slider>
    // </div>
  );
};

export default SkillsCarousel;
