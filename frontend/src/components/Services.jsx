import React from "react";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Cámaras de Seguridad</h3>
          <p>
            Protege lo que más te importa. Instalamos sistemas avanzados de cámaras de seguridad para hogares, negocios y
            empresas, con acceso remoto y monitoreo 24/7. Siente la tranquilidad de tener un control total, sin importar
            donde estés.
          </p>
        </div>
        <div className="service-item">
          <h3>Desarrollo Web Personalizado</h3>
          <p>
            Te ayudamos a construir tu presencia online. Creamos sitios web totalmente personalizados, con un diseño
            atractivo, funcional y optimizado para tu mercado boliviano. Desde tiendas en línea hasta plataformas
            corporativas.
          </p>
        </div>
        <div className="service-item">
          <h3>Inteligencia Artificial</h3>
          <p>
            Revoluciona tu negocio con soluciones basadas en inteligencia artificial. Te ayudamos a automatizar
            procesos, mejorar la eficiencia y obtener datos clave para la toma de decisiones. ¡Haz que tu negocio crezca
            con IA!
          </p>
        </div>
        <div className="service-item">
          <h3>Desarrollo de Software a Medida</h3>
          <p>
            ¿Tienes necesidades específicas? Creamos software a medida que se adapta a tus procesos de negocio. Con
            soluciones flexibles y escalables, aseguramos que tu empresa esté siempre a la vanguardia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;