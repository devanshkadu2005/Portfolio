import React, { useState, useEffect } from 'react';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header style={{ boxShadow: isScrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
      <nav>
        <div className="logo">DK</div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' }
          ].map((item, index) => (
            <li key={item.id} style={{ animation: isMobileMenuOpen ? `navLinkFade 0.5s ease forwards ${0.3 + index * 0.14}s` : '' }}>
              <a 
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''} 
                onClick={(e) => scrollToSection(e, `#${item.id}`)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="theme-toggle" onClick={toggleTheme}>
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <div className="theme-ball"></div>
        </div>
        <div 
          className={`burger ${isMobileMenuOpen ? 'toggle' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
