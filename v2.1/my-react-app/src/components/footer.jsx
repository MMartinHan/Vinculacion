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
            </div>
            <div className="copyright">
                © Copyright {new Date().getFullYear()} | by Martin Han and Mateo Andrade DCCO - ESPE
            </div>
        </footer>
    );
}

export default Footer;
