import React from 'react';
// CSS import removed temporarily

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Your Name</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;