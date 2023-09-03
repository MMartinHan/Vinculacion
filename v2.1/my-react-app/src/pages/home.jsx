import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Header />

      {/* Sección 1: Título */}
      <section className="section1">
        <h1>Proyecto de Vinculación con la Sociedad - Repotenciación de Computadores</h1>
      </section>

      {/* Sección 2: Imagen y Descripción */}
      <section className="section2">
        <div className="left">
          <img src="src/assets/panoramicaespe.jpg" alt="Imagen de proyecto" />
        </div>
        <div className="right">
          <h2>Sobre el Proyecto</h2>
          <p>Fortalecimiento de actividades de servicio comunitario a través de la gestión de proyectos sociales de la Universidad de
            las Fuerzas Armadas – ESPE, en las zonas urbanas marginales, rurales y de los grupos de atención prioritaria enfocado en
            el mantenimiento y repotenciación de equipos informáticos de las zonas rurales y marginales de orellana contribuyendo
            con la responsabilidad social de Schlumberger Ecuador.</p>
        </div>
      </section>
      <br></br>
      <br></br>

      {/* Sección 3: Datos */}
      <section className="section3">
        <div className="data">
          <div className="data-item">
            <h2>30+</h2>
            <h4>Estudiantes Participantes</h4>
          </div>
          <div className="data-item">
            <h2>1.5k</h2>
            <h4>Jovenes Beneficiados</h4>
          </div>
          <div className="data-item">
            <h2>200+</h2>
            <h4>Equipos Repotenciados</h4>
          </div>
          <div className="data-item">
            <h2>50+</h2>
            <h4>Mejoras Listas</h4>
          </div>
          {/* Agregar más datos según sea necesario */}
        </div>
      </section>
      <br></br>
      <br></br>

      {/* Sección 4: Características */}
      <h2>Las actividades de nuestro proyecto</h2>
      <section className="section4">
        <div className="feature">
          <img src="src/assets/investigacion.jpg" alt="Carac_investigacion" />
          <h3>Investigacion</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolore, distinctio temporibus ipsa vero blanditiis
            quo quas amet ratione, tenetur iste ducimus, dicta saepe. Laudantium minima optio error aliquid placeat?</p>
        </div>
        <div className="feature">
          <img src="src/assets/reparacion.jpg" alt="Carac_reparacion" />
          <h3>Reparacion</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sed corporis laboriosam, fugiat voluptas illum,
            natus in quaerat nostrum fuga ullam doloribus nesciunt ex adipisci ipsa ut libero fugit quas.</p>
        </div>
        <div className="feature">
          <img src="src/assets/donacion.jpg" alt="Carac_entrega" />
          <h3>Entrega</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae sit ex, a nisi veritatis libero, cum ea
            unde doloribus officia itaque laboriosam veniam facilis ducimus iure est quaerat. Dolores.</p>
        </div>
      </section>

      {/* Sección 5: Personas Encargadas */}
      <h2>Quienes lideran el Proyecto</h2>
      <section className="section5">
        <div className="person">
          <img src="src/assets/persona2.jpg" alt="Persona1" />
          <h4>Ing. Fernando Solis</h4>
          <p>DIRECTOR</p>
        </div>
        <div className="person">
          <img src="src/assets/persona2.jpg" alt="Persona2" />
          <h4>Ing. Cesar Chiliquinga</h4>
          <p>COLABORADOR</p>
        </div>
        <div className="person">
          <img src="src/assets/persona2.jpg" alt="Persona3" />
          <h4>Ing. Omar Quimbita</h4>
          <p>COLABORADOR</p>
        </div>
      </section>
      <br></br>
      <br></br>

      {/* Sección 6: Subtítulo, Descripción e Imagen de Mapa */}
      <section className="section6">
        <div className="left">
          <h2>ESPE</h2>
          <p>El proyecto de repotenciacion de computadores se realiza en las instalaciones de la Universidad de las Fuerzas Armadas Espe.
            En el Departamento de Ciencias de la Computación, ubicado en el Bloque 1, en el laboratorio de Hardware.
            <br></br>Av. Gral. Rumiñahui S/N, Sangolquí 171103
            <br></br>Quito, Ecuador
            <br></br>(02) 398-9400
          </p>
        </div>
        <div className="right">
          <img src="src/assets/mapa_espe.jpg" alt="Mapa" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
