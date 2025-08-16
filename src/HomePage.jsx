import React from 'react';
import { Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Skill from './Skill';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <Element name="home">
        <Home />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="experience">
        <Experience />
      </Element>
      
      <Element name="skills">
        <Skill />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default HomePage;