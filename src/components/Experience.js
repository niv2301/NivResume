import React from 'react';

const experiences = [
  {
    company: 'Unity',
    role: 'Technical Solutions Engineer',
    duration: 'June 2022 - Present',
    description: 'I have experience troubleshooting and resolving complex technical issues within the mobile industry, focusing on SDK and API integrations to ensure seamless functionality for big publishers in the industry.\nI am skilled in using tools like Postman and Charles Proxy for debugging and testing mobile applications and backend systems and identifying root causes of system-level issues using monitoring tools like Kibana.\nMy expertise includes working with development environments such as Unity3D, Xcode, and Android Studio, with proficiency in programming languages like Java, C#, and Objective-C.\nI have a strong background in collaborating with cross-functional teams, including R&D and Product, to deliver customer-focused solutions.'
    ,
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
