// src/components/Home.js
import React from 'react';
import './home.css'; // Importa el archivo de estilos CSS

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: "url('src/assets/images/ventilador.jpeg')" }}>
      <nav className="menu">
        <ul>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">NOSOTROS</a></li>
          <li><a href="#">PROYECTO</a></li>
          <li><a href="#">GALERIA</a></li>
          <li><a href="#">CONTACTOS</a></li>
          <li><a href="#">INGRESAR</a></li>
        </ul>
      </nav>
      <div className="title">Proyecto de Vinculacion</div>
    </div>
  );
}

export default Home;
