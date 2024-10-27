import React, { useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const links = [
    {
      id: 1,
      link: "Projects",
      ref: projectsRef,
    },
    {
      id: 2,
      link: "Skills",
      ref: skillsRef,
    },
    {
      id: 3,
      link: "Contact",
      ref: contactRef,
    },
  ];

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} links={links} />
      <LandingPage />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Home;
