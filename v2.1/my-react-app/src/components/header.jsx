import React from 'react';
import './header.css'
import logoImage from '../assets/logo_espe.png';

function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={logoImage} alt="Logo_espe" /></div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Inicio</a></li>
          <li className="nav-item"><a href="/proyecto">Proyecto</a></li>
          <li className="nav-item"><a href="/galeria">Galería</a></li>
          <li className="nav-item"><a href="/contacto">Contacto</a></li>
          <li className="nav-item login-button"><a href="#">Ingresar</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
