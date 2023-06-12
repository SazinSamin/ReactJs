import React from 'react';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        {/* Home section content */}
      </section>
      <section id="skills">
        {/* Skills section content */}
      </section>
    </div>
  );
};

export default App;


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
      </ul>
    </nav>
  );
};

export default Navbar;

