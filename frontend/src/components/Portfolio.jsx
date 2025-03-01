import React, { useEffect, useState } from "react";
import axios from "axios";
import imagenNotFound from '../assets/images/importants/imagen-not-found.png';


const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost/nirvanadigitalsystem/backend-php/public/projects.php"
        );
        
        if (response.data && Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          setError("No se encontraron proyectos.");
        }
      } catch (err) {
        setError("Hubo un error al obtener los proyectos.");
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portafolio</h2>
      <p className="portfolio-description">
        Descubre nuestros proyectos más recientes. Hemos trabajado con clientes de diversas industrias para brindarles
        soluciones tecnológicas de vanguardia.
      </p>

      {error && <p className="error-message">{error}</p>}

      <div className="portfolio-grid">
        {projects.length === 0 ? (
          <div className="loader_container">
            <span className="loader"></span>
            <span>Cargando...</span>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img 
                src={imagenNotFound} 
                data-src={project.img_url} 
                alt={project.titulo} 
                className="portfolio-image" 
                onLoad={(e) => {
                  const img = new Image();
                  img.src = e.target.getAttribute('data-src');
                  img.onload = () => e.target.src = img.src;
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = imagenNotFound;
                }}
              />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-button">
                Visualizar
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Portfolio;
