import React from "react";
import nirvanaImage from "../assets/images/nirvana_logos/logoNirvanaOficial-grande.png"; 
import { Link } from "react-router-dom";

const Home = () => {
  const message =
    "Bienvenido a Nirvana Digital System, tu socio tecnológico ideal en Bolivia. Ofrecemos soluciones personalizadas en desarrollo web, cámaras de seguridad, inteligencia artificial y más.";

  return (
    <>
      <div className="home-container">
        <section className="banner">
          <img src={nirvanaImage} alt="Tecnología Avanzada" className="banner-image" />
          <div className="banner-content">
            <h1 className="home-title">Transformamos Tu Mundo Digital</h1>
            <p className="home-message">{message}</p>
            <Link to="/contact" className="banner-button">Contáctanos</Link>
          </div>
        </section>
        <section className="about-us">
          <div className="about-content">
            <h2 className="about-title">¿Quiénes Somos?</h2>
            <p className="about-description">
              En Nirvana Digital System nos especializamos en proveer soluciones tecnológicas de última generación. Desde la
              instalación de cámaras de seguridad hasta el desarrollo de software y páginas web a medida. Nuestro equipo de
              expertos está comprometido en llevar tu negocio al siguiente nivel con un enfoque integral y personalizado.
            </p>
          </div>
        </section>
        <section className="services-overview">
          <h2 className="services-title">Nuestros Servicios</h2>
          <div className="services-list">
            <div className="service-item">
              <h3>Cámaras de Seguridad</h3>
              <p>Protege lo que más te importa con nuestros sistemas avanzados de cámaras de seguridad.</p>
            </div>
            <div className="service-item">
              <h3>Desarrollo Web</h3>
              <p>Construimos sitios web personalizados y optimizados para tu mercado.</p>
            </div>
            <div className="service-item">
              <h3>Inteligencia Artificial</h3>
              <p>Automatiza procesos y mejora la eficiencia con nuestras soluciones de IA.</p>
            </div>
            <div className="service-item">
              <h3>Software a Medida</h3>
              <p>Creamos software que se adapta a tus procesos de negocio.</p>
            </div>
          </div>
        </section>
        <section className="cta">
          <h3 className="cta-title">¿Listo para llevar tu negocio al futuro?</h3>
          <p className="cta-description">Contáctanos hoy mismo y obtén una consultoría gratuita sobre nuestras soluciones.</p>
          <Link to="/contact" className="cta-button">Contáctanos</Link>
        </section>
      </div>
    </>
  );
};

export default Home;