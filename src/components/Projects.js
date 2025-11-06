import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'WidViz',
      description: 'An application for students that summarizes YouTube videos, provides MCQ quizzes, has a notes saver and goal calendar.',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Electron.js', 'ML'],
      github: 'https://github.com/Sub-Group-11/widviz',
      demo: 'https://github.com/Sub-Group-11/widviz',
      delay: 0
    },
    {
      title: 'Sign Language Interpreter',
      description: 'A complete Sign Language Recognition system using Python, PyTorch, Tkinter, and MediaPipe. Supports both deep learning-based (EfficientNet-B0) and rule-based recognition modules with real-time webcam integration.',
      technologies: ['Python', 'PyTorch', 'Tkinter', 'MediaPipe', 'EfficientNet-B0', 'Computer Vision'],
      github: 'https://github.com/adityakale838/SignLanguage-Interpreter',
      demo: 'https://github.com/adityakale838/SignLanguage-Interpreter',
      delay: 200
    },
    {
      title: 'Agniya',
      titleSuffix: '(Ongoing)',
      description: 'A high-performance encrypted database system making homomorphic encryption practical. Implements a 5-layer optimization strategy with a novel multi-level cache to achieve massive query speedups. (Ongoing Thesis Project)',
      technologies: ['Python', 'Cryptography', 'Homomorphic Encryption', 'Database', 'Performance Optimization'],
      github: '#',
      demo: '#',
      delay: 400,
      isOngoing: true
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay={project.delay}
            >
              <div className="project-content">
                <h3>
                  {project.title}
                  {project.titleSuffix && (
                    <span style={{ color: 'var(--primary-color)', fontSize: '0.8em' }}>
                      {' '}{project.titleSuffix}
                    </span>
                  )}
                </h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={project.isOngoing ? { opacity: '0.5', cursor: 'not-allowed' } : {}}
                    onClick={project.isOngoing ? (e) => e.preventDefault() : undefined}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href={project.demo} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={project.isOngoing ? { opacity: '0.5', cursor: 'not-allowed' } : {}}
                    onClick={project.isOngoing ? (e) => e.preventDefault() : undefined}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
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
