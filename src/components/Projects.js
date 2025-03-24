import React from 'react';

const Projects = () => {
  // Sample project data - replace with your own projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of your first project and what technologies you used.',
      image: 'project1.jpg',
      technologies: ['React', 'Node.js', 'CSS'],
      liveLink: 'https://project1.example.com',
      sourceLink: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of your second project showcasing different skills.',
      image: 'project2.jpg',
      technologies: ['JavaScript', 'HTML', 'SASS'],
      liveLink: 'https://project2.example.com',
      sourceLink: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Your third project highlighting something unique about your abilities.',
      image: 'project3.jpg',
      technologies: ['React', 'Firebase', 'Material UI'],
      liveLink: 'https://project3.example.com',
      sourceLink: 'https://github.com/yourusername/project3'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



