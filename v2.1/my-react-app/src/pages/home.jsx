import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import MapComponent from '../components/Map.jsx';
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
  
      <div className='subtitle'>
        <h2>Las actividades del proyecto</h2>
      </div>

      <section className="section4">
      
        <div className="feature">
          <img className='imgIzquierda' src="src/assets/investigacion.jpg" alt="Carac_investigacion" />
          <h3>Investigacion</h3>
          <p>Realizamos un análisis minucioso de las computadoras donadas por la empresa petrolera, 
            identificando las fallas y planificando estrategias de reparación. 
            Nuestro equipo técnico examina cada dispositivo para diagnosticar problemas y mejorar su rendimiento general. 
            Esta fase no solo se centra en corregir los fallos visibles, 
            sino que también busca optimizar su funcionamiento para garantizar su durabilidad y eficiencia a largo plazo.</p>
        </div>
        <div className="feature">
          <img className='imgMitad' src="src/assets/reparacion.jpg" alt="Carac_reparacion" />
          <h3>Reparacion</h3>
          <p>Nuestro equipo altamente capacitado se encarga de restaurar cada componente dañado o desgastado de las computadoras. 
            Utilizamos técnicas avanzadas y herramientas especializadas para realizar reparaciones precisas y asegurar que las máquinas recuperen su funcionalidad original. 
            Desde la sustitución de piezas clave hasta la optimización del software, 
            cada paso se ejecuta con cuidado y atención para garantizar la calidad de las reparaciones.</p>
        </div>
        <div className="feature">
          <img className='imgDerecha' src="src/assets/donacion.jpg" alt="Carac_entrega" />
          <h3>Entrega</h3>
          <p>Una vez restauradas, las computadoras son entregadas con dedicación a comunidades de bajos recursos. 
            Estas donaciones representan oportunidades cruciales, 
            brindando acceso a la tecnología a aquellos que no podrían obtenerla de otra manera. 
            Nos aseguramos de que cada máquina reparada llegue a manos de quienes más lo necesitan, 
            marcando un impacto significativo al proporcionar herramientas vitales para el desarrollo educativo y social en estas comunidades.</p>
        </div>
      </section>

      {/* Sección 5: Personas Encargadas */}
      <div className='subtitle'>
        <h2>Quienes lideran el Proyecto</h2>
      </div>
      <section className="section5">
        <div className="person">
          <img className='director' src="src/assets/persona1.jpg" alt="Persona1" />
          <h4>Ing. Fernando Solis</h4>
          <h4>efsolis@espe.edu.ec</h4>
          <p>DIRECTOR</p>
        </div>
        <div className="person">
          <img className='colaborador1' src="src/assets/persona2.jpg" alt="Persona2" />
          <h4>Ing. Cesar Chiliquinga</h4>
          <h4>cichiliquinga@espe.edu.ec</h4>
          <p>COLABORADOR</p>
        </div>
        <div className="person">
          <img className='colaborador2' src="src/assets/persona3.jpg" alt="Persona3" />
          <h4>Ing. Omar Quimbita</h4>
          <h4>orquimbita@espe.edu.ec</h4>
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
            <br></br>
            <br></br>- Av. Gral. Rumiñahui S/N, Sangolquí 171103
            <br></br>- Quito, Ecuador
            <br></br>- (02) 398-9400
          </p>
        </div>
        <div className="right">
          <MapComponent />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
