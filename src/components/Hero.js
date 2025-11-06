import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero');
      const heroBg = document.querySelector('.hero-bg');
      
      if (scrollPosition < window.innerHeight && heroSection && heroBg) {
        heroSection.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        heroBg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 data-aos="fade-up" data-aos-duration="1000">Devansh Gajendra Kadu</h1>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Data Science Student @ VIT Pune</h2>
        <a 
          href="#projects" 
          className="cta-button" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="400"
          onClick={scrollToProjects}
        >
          View My Projects
        </a>
      </div>
      <div className="hero-bg"></div>
    </section>
  );
};

export default Hero;
