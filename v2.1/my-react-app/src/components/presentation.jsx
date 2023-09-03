import React from 'react';
import './presentation.css';

function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation-left">
        <img src="src/assets/ventilador.jpeg" alt="Imagen de presentación" />
      </div>
      <div className="presentation-right">
        <p>Descripción del proyecto...</p>
      </div>
    </section>
  );
}

export default Presentation;
