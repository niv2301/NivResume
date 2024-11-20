import React from 'react';

const experiences = [
  {
    company: 'Unity',
    role: 'Technical Solutions Engineer',
    duration: 'June 2022 - Present',
    description: 'Investigate and resolve complex issues, working closely with R&D and business teams. Requires strong problem-solving skills and communication abilities.',
  },
  {
    company: 'Nitzanim',
    role: 'Python Content Developer',
    duration: 'September 2021 - April 2022',
    description: 'Developed Python content for educational purposes, creating interactive and engaging material for students.',
  },
  {
    company: 'Perach & PUSH',
    role: 'Tutor',
    duration: 'October 2017 - July 2022',
    description: 'Tutored elementary students in a variety of subjects as part of the IMPACT program. Awarded Outstanding Tutor in "Perach".',
  },
];

const Experience = () => {
  return (
    <div id="experience" className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold">{experience.role} at {experience.company}</h3>
              <p className="text-sm text-gray-500">{experience.duration}</p>
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
