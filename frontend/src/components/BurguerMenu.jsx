import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nirvanaLogo from '../assets/images/nirvana_logos/logoNirvanaOficial-mediano.png';

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Link to="/" className="brand-title" src="">
        <img src={nirvanaLogo} alt="Logo Nirvana Digital System" />
        <h1>Nirvana Digital System</h1>
      </Link>
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
          <li><Link to="/about">Acerca de nosotros</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default BurguerMenu;