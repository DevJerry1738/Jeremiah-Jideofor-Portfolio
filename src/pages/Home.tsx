// src/pages/Home.tsx

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import WhatImAbout from '../components/WhatImAbout';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
  return (
    <div>
     
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <FeaturedProjects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;