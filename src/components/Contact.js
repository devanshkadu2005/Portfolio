import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 data-aos="fade-up">Let's build together.</h2>
        <div data-aos="fade-up" data-aos-delay="200">
          <a href="mailto:devansh.g.kadu@gmail.com" className="contact-email link-hover">
            devansh.g.kadu@gmail.com
          </a>
        </div>
        
        <div className="contact-links" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }} data-aos="fade-up" data-aos-delay="300">
          <a href="https://github.com/devanshkadu2005" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ color: 'var(--text-secondary)' }}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/devanshkadu2005" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ color: 'var(--text-secondary)' }}>
            LinkedIn
          </a>
          <a href={`${process.env.PUBLIC_URL}/assets/Devansh_Kadu_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="link-hover" style={{ color: 'var(--text-secondary)' }}>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
