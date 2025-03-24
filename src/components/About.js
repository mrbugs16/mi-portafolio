import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a [Your Profession] passionate about creating 
              meaningful and engaging web experiences. With experience in 
              [Your Skills/Technologies], I aim to build solutions that are 
              both beautiful and functional.
            </p>
            <p>
              I graduated from [Your Education] and have [Your Experience] 
              years of experience in the field. I'm constantly learning and 
              exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>JavaScript (React, Node.js)</li>
              <li>HTML & CSS</li>
              <li>Responsive Design</li>
              <li>[Add more skills]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;