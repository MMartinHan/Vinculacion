import React, { useState } from 'react';
import './Project.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Misión',
      image: 'src/assets/panoramicaespe.jpg',
      description: 'Repotenciar dispositivos electrónicos que aporte como medio de aprendizaje educativo en comunidades marginales del oriente ecuatoriano'
    },
    {
      title: 'Visión',
      image: 'src/assets/repotenciacion.jpg',
      description: 'Contribuir al conocimiento de los nuevos profesionales , y al aprendizaje educativo con recursos tecnológicos en comunidades orientales',
    },
    // Agregar más slides según sea necesario
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project">
      <Header />
      {/* Sección de Título */}
      <section className="project-title">
        <h1>Detalles del Proyecto</h1>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="project-mission-vision">
        <div className="carousel">
          <button className="carousel-button" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="carousel-content">
            <h3>{slides[currentSlide].title}</h3>
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
            <p>{slides[currentSlide].description}</p>
          </div>
          <button className="carousel-button" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>
      <br></br>
      <br></br>
      {/* Sección de Objetivos */}
      <section className="project-objectives">
        <h2>Objetivos del Proyecto</h2>
        <div className="objective-container">
          {/* Objetivo 1 */}
          <div className="objective-box">
            <h3>Objetivo 1</h3>
            <p>Asignación recursos y de espacio físico para la creación del
              laboratorio de mantenimiento correctivo y repotenciación de los
              equipos informáticos en la Universidad de las Fuerzas Armadas.
              Departamento de Ciencias de la Computación.</p>
          </div>
          {/* Objetivo 2 */}
          <div className="objective-box">
            <h3>Objetivo 2</h3>
            <p>Implementación del laboratorio para repotenciar los equipos
              informáticos en la Universidad de las Fuerzas Armadas ESPE..</p>
          </div>
          {/* Objetivo 3 */}
          <div className="objective-box">
            <h3>Objetivo 3</h3>
            <p>Diagnosticar la situación actual de los equipos informáticos
              entregados por Schlumberger Ecuador.</p>
          </div>
          {/* Agregar más objetivos según sea necesario */}
        </div>
      </section>
      <br></br>
      <br></br>

      <div className="project-students">
        <div className="student-overlay">
          <img
            src="src/assets/estudiantes.jpg"
            alt="Estudiante 1"
            className="student-image"
          />
        </div>
        <div className="student-details">
          <h2>Estudiantes Encargados</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempore. Quisquam id deleniti dicta tenetur aut reprehenderit nemo suscipit molestiae beatae dolorum. Iste accusamus ab eaque quod. Distinctio, corrupti debitis..</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
