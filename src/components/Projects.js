import React from 'react';

const projects = [
  {
    title: 'Synchronization Experiences',
    description: 'Investigated how variations in synchronization experiences impact user perceptions. Developed using Node.js for the server and React Native for the client.',
    technologies: ['Node.js', 'React Native', 'JavaScript'],
    url: 'https://github.com/niv2301/finals_projecte',
  },
  {
    title: 'Football Association Management',
    description: 'Client-server web application to manage football associations with various functionalities. Developed using Node.js and Vue.js.',
    technologies: ['Node.js', 'Vue'],
    url: 'https://github.com/niv2301/Football-Management-System',
  },
  {
    title: 'Search Engine',
    description: 'Developed an application that retrieves relevant documents based on user queries using Python.',
    technologies: ['Python'],
    url: 'https://github.com/niv2301/Search_Engine',
  },
  {
    title: 'Maze Application',
    description: 'Customizable maze generator with save/load features. Implemented using Design Patterns in Java.',
    technologies: ['Java','CSS','HTML'],
    url: 'https://github.com/niv2301/Maze',
  },
  {
    title: 'Pacman Game',
    description: 'Created a Pacman game using JavaScript.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    url: 'https://github.com/niv2301/Pacman',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"> 
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                </a>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
