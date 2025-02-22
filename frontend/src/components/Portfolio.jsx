import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portafolio</h2>
      <p className="portfolio-description">
        Descubre nuestros proyectos más recientes. Hemos trabajado con clientes de diversas industrias para brindarles soluciones tecnológicas de vanguardia.
      </p>
      <div className="portfolio-grid">
        {/* Agregar ejemplos de proyectos aquí */}
        <div className="portfolio-item">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1.</p>
        </div>
        <div className="portfolio-item">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;