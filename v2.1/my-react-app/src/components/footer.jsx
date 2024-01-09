import React from 'react';
import './footer.css';
import logoImage from '../assets/logo_espe.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="logo"><img src={logoImage} alt="Logo_espe" /></div>
                </div>
                <div className="footer-right">
                    <ul className="footer-menu">
                        <li><a href="/proyecto">Proyecto</a></li>
                        <li><a href="/galeria">Galería</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                © {new Date().getFullYear()} Copyright © 2023 | Universidad de las Fuerzas Armadas Espe. 
            </div>
        </footer>
    );
}

export default Footer;
