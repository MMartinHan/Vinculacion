import React, { useState } from 'react';
import './Project.css';
import Header from '../components/header';
import Footer from '../components/footer';

import imgRepot2 from '../assets/repotenciacion2.jpg';
import imgMundoTec from '../assets/mundotec.jpg';
import imgAlumnos from '../assets/alumnos.jpg';

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Misión',
      image: imgRepot2,
      description: 'Reparar y donar computadoras provenientes de donaciones corporativas, proporcionando herramientas tecnológicas vitales a comunidades de bajos recursos, impulsando la educación y el progreso en todo el mundo.'
    },
    {
      title: 'Visión',
      image: imgMundoTec,
      description: 'Crear un mundo donde la tecnología sea un catalizador de igualdad, capacitando a comunidades desfavorecidas a través del acceso a computadoras restauradas y funcionales, fomentando así el desarrollo y el aprendizaje.',
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
        <br></br>
        <h2>Objetivos del Proyecto</h2>
        <div className="objective-container">
          {/* Objetivo 1 */}
          <div className="objective-box">
            <h3>Objetivo 1</h3>
            <p>Facilitar el acceso a la tecnología reparada y funcional a un número creciente de comunidades desfavorecidas, 
              asegurando que cada donación impacte directamente en la vida educativa y profesional de quienes la reciben.</p>
          </div>
          {/* Objetivo 2 */}
          <div className="objective-box">
            <h3>Objetivo 2</h3>
            <p>Investigar constantemente nuevas técnicas y herramientas para optimizar el proceso de reparación, 
              aumentando la eficiencia y la calidad de las restauraciones realizadas en cada computadora.</p>
          </div>
          {/* Objetivo 3 */}
          <div className="objective-box">
            <h3>Objetivo 3</h3>
            <p>Medir y evaluar el impacto de nuestras donaciones en las comunidades receptoras, 
              recopilando datos cuantitativos y cualitativos para comprender y mejorar continuamente nuestro impacto.</p>
          </div>
          {/* Agregar más objetivos según sea necesario */}
        </div>
        <br></br>
      </section>
      <br></br>
      <br></br>

      <div className="project-students">
        <div className="student-overlay">
          <img
            src={imgAlumnos}
            alt="Estudiante 1"
            className="student-image"
          />
        </div>
        <div className="student-details">
          <h2>Estudiantes Encargados</h2>
          <p>Los estudiantes del Departamento de Ciencias de la Computación (DCCO) de la Universidad de las Fuerzas Armadas ESPE son el pilar fundamental de nuestra iniciativa. 
            Este grupo de jóvenes dedicados y comprometidos aporta su experiencia, 
            conocimientos técnicos y pasión por la tecnología a cada etapa del proyecto. 
            Su participación activa en la investigación, reparación y entrega de las computadoras donadas garantiza un alto estándar de calidad en cada proceso. 
            Su liderazgo y valores inherentes a la institución fortalecen el impacto social de nuestra labor, 
            representando un ejemplo destacado de servicio y excelencia en la comunidad.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
