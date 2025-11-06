import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  const skills = [
    { name: 'Python', icon: 'fab fa-python', progress: 100, delay: 0 },
    { name: 'HTML', icon: 'fab fa-html5', progress: 100, delay: 200 },
    { name: 'CSS', icon: 'fab fa-css3-alt', progress: 100, delay: 300 },
    { name: 'JavaScript', icon: 'fab fa-js', progress: 100, delay: 400 },
    { name: 'Machine Learning', icon: 'fas fa-brain', progress: 100, delay: 500 },
    { name: 'React', icon: 'fab fa-react', progress: 100, delay: 600 },
    { name: 'Node.js', icon: 'fab fa-node-js', progress: 100, delay: 700 },
    { name: 'C++', icon: 'fas fa-code', progress: 100, delay: 800 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector('.skills');
      if (skillsSection) {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && !animated) {
          setAnimated(true);
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill" 
                data-aos="fade-up" 
                data-aos-duration="800"
                data-aos-delay={skill.delay}
              >
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    data-progress={skill.progress}
                    style={{ width: animated ? `${skill.progress}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
