import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-description">
        Estamos aquí para ayudarte. Si tienes alguna pregunta o deseas obtener más información sobre nuestros servicios,
        no dudes en contactarnos.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Tu Mensaje" required></textarea>
        <button type="submit" className="submit-btn">Enviar Mensaje</button>
      </form>
      <p className="contact-info">
        <strong>Email:</strong> <a href="mailto:nirvanadigitalsystem@gmail.com?subject=Consulta%20sobre%20servicios&body=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios
" target="_blank">nirvanadigitalsystem@gmail.com</a>
      </p>
      <p className="contact-info">
        <strong>Teléfono:</strong> <a href="https://wa.me/59176894088?text=Hola%20Nirvana%20Digital%20System%2C%20quiero%20informacion%20sobre%20sus%20servicios" target="_blank">+591 76894088</a>
      </p>
    </div>
  );
};

export default Contact;