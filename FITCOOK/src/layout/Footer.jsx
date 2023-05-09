import  React  from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className="social">
        <a href="https://www.facebook.com/tu_pagina"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/tu_pagina"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/tu_pagina"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/tu_pagina"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="links">
        <a href="/terminos-y-condiciones">Términos y condiciones</a>
        <a href="/politica-de-privacidad">Política de privacidad</a>
        <a href="/preguntas-frecuentes">Preguntas frecuentes</a>
        <a href="/contacto">Contáctanos</a>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 
          <a href="https://www.tu_pagina.com">Tu Página</a>. 
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;