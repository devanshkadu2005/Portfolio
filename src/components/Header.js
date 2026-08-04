import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <nav>
        <a href="#home" className="logo">Devansh Kadu.</a>
        <ul className="nav-links">
          <li><a href="#experience" className="link-hover">Experience</a></li>
          <li><a href="#projects" className="link-hover">Projects</a></li>
          <li><a href="#skills" className="link-hover">Expertise</a></li>
          <li><a href="#contact" className="link-hover">Contact</a></li>
          <li>
            <a href={`${process.env.PUBLIC_URL}/assets/Devansh_Kadu_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="link-hover">
              Resume
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
