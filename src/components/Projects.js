import React from 'react';
import BounceCards from './BounceCards';

const Projects = () => {
  // BounceCards configuration
  const projectImages = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

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
        
        {/* BounceCards Animation */}
        <div data-aos="fade-up" data-aos-duration="1000" style={{ marginBottom: '4rem' }}>
          <BounceCards
            className="custom-bounceCards"
            images={projectImages}
            containerWidth={500}
            containerHeight={250}
            animationDelay={0.5}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={false}
          />
        </div>

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
