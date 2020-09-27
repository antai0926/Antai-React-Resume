import React from 'react';
//Components
import Section from '../Section/Section.component';
import SectionTitle from '../SectionTitle/SectionTitle.component';
import './Skills.styles.scss';

const Skills = () => {
  return (
    <Section>
      <SectionTitle>技能</SectionTitle>
      <div className="skills-container">
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>React.js</li>
        </ul>
        <ul>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MariaDB</li>
        </ul>
        <ul>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Java</li>
          <li>Spring Boot</li>
        </ul>
        <ul>
          <li>Material-UI</li>
          <li>Python</li>
          <li>Firebase</li>
          <li>Heroku</li>
        </ul>
      </div>
    </Section>
  );
};

export default Skills;
