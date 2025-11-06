import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-img" data-aos="fade-right" data-aos-duration="1000">
            <img src="/assets/pfp.jpg" alt="Devansh Gajendra Kadu" className="profile-photo" />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-duration="1000">
            <p>Hello! I'm Devansh Gajendra Kadu, a BTech CSE (Data Science) student at Vishwakarma Institute of Technology, Pune. I specialize in creating elegant, user-friendly interfaces with a strong foundation in frontend development.</p>
            <p>Beyond crafting beautiful UIs, I'm deeply passionate about backend systems, machine learning, and building scalable applications. I enjoy creating full-stack solutions that seamlessly integrate intelligent features and data-driven insights to solve real-world problems. My goal is to bridge the gap between powerful technology and intuitive user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
