import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; 2025 Nirvana Digital System. Todos los derechos reservados.</p>
      <ul className="footer-social-links">
        <li><a href="https://www.linkedin.com/in/nirvana-digital-system-54884a352/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/images/social_media/linkedin.png" alt="Linkedin" /></a></li>
        <li><a href="https://www.instagram.com/nirvana_digital_system/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/images/social_media/instagram.png" alt="Instagram" /></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=61573595932036" target="_blank" rel="noopener noreferrer"><img src="/src/assets/images/social_media/facebook.png" alt="Facebook" /></a></li>
        <li><a href="https://wa.me/59176894088?text=Hola%20Nirvana%20Digital%20System%2C%20quiero%20informacion%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer"><img src="/src/assets/images/social_media/whatsapp.png" alt="Whatsapp" /></a></li>
        <li><a href="https://www.tiktok.com/@nirvana.digital.system?lang=es" target="_blank" rel="noopener noreferrer"><img src="/src/assets/images/social_media/tiktok.png" alt="TikTok" /></a></li>
      </ul>
      <ul className="footer-links">
        <li><a href="/terms">Términos y Condiciones</a></li>
        <li><a href="/privacy">Política de Privacidad</a></li>
      </ul>
    </footer>
  );
};

export default Footer;