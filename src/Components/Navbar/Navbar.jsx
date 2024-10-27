import React from 'react';
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

const Navbar = ({scrollToSection, links}) => {
  return (
    <div className='
    flex 
    justify-between 
    items-center 
    p-4
    '>
      <Logo />
      <NavLinks scrollToSection={scrollToSection} links={links} />
    </div>
  );
};

export default Navbar;
