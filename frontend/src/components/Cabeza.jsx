import React from "react";
import { Link } from "react-router-dom";

const Cabeza = () => (
    <>
    <header className="header-container">
      <h1 className="brand-title">Nirvana Digital System</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/services" className="nav-link">Servicios</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portafolio</Link></li>
          <li><Link to="/contact" className="nav-link">Contacto</Link></li>
          <li><Link to="/about" className="nav-link">Acerca de nosotros</Link></li>
        </ul>
      </nav>
    </header>
    </>
);


export default Cabeza;
