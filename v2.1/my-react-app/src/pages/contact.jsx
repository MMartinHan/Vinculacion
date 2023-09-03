import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './contact.css';

function Contact() {
  return (
    <div className="home">
      <Header />
        {/* Sección 1: Imagen y Formulario de Contacto */}
      <section className="section1">
        <div className="left">
          <img src="src/assets/dcco.jpeg" alt="Logo_DCCO" />
        </div>
        <div className="right">
          <h2>Contacto</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Apellido" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Correo" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Asunto" />
            </div>
            <div className="form-group">
              <textarea placeholder="Mensaje"></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>
      

      {/* Sección 2: Cajas de Texto */}
      <section className="section2">
        <div className="text-box">
          <h3>Ubicacion</h3>
          <p>ESPE - Matriz
            <br></br> Av. Gral. Rumiñahui S/N, Sangolquí 171103
          </p>
        </div>
        <div className="text-box">
          <h3>Telefonos</h3>
          <p>+593 0999999999
            <br></br> +593 0999999999
            <br></br> +593 0999999999
          </p>
        </div>
        <div className="text-box">
          <h3>Correo Electronico</h3>
          <p>correo@espe.edu.ec
            <br></br> correo2@espe.edu.ec
            <br></br> correo3@espe.edu.ec
          </p>
        </div>
      </section>
      <br></br>


      <Footer />
    </div>
  );
}

export default Contact;
