import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 data-aos="fade-up">Technical Arsenal</h2>
        
        <div className="skills-grid" data-aos="fade-up">
          <div className="skill-col">
            <h4>Languages & Fundamentals</h4>
            <ul>
              <li>C / C++</li>
              <li>Python</li>
              <li>JavaScript / TypeScript</li>
              <li>Rust</li>
              <li>SQL</li>
              <li>Data Structures & Algorithms</li>
              <li>Complexity Analysis</li>
            </ul>
          </div>
          
          <div className="skill-col">
            <h4>Systems & Security</h4>
            <ul>
              <li>CUDA / GPU Computing</li>
              <li>Homomorphic Encryption</li>
              <li>Paillier Cryptosystem</li>
              <li>Operating Systems</li>
              <li>Linux & Docker</li>
            </ul>
          </div>
          
          <div className="skill-col">
            <h4>Engineering & Frameworks</h4>
            <ul>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Flask / FastAPI</li>
              <li>PostgreSQL / Supabase</li>
              <li>Google Cloud APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
