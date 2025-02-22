import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="brand-title">Nirvana Digital System</div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul className={isOpen ? 'active' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/portfolio">Portafolio</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default BurguerMenu;