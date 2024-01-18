import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './gallery.css';
import img3 from '../assets/3.jpg';
import img4 from '../assets/2.jpg';
import img5 from '../assets/1.jpg';
import img6 from '../assets/4.jpg';
import img7 from '../assets/5.jpg';
import img8 from '../assets/g1.png';
import img9 from '../assets/alumnos.jpg';
import img10 from '../assets/donacion.jpg';

import logoImage from '../assets/logo_espe.png';

function Gallery() {
    return (
        <div className="gallery">
            <Header />
            {/* Sección de Galería de Imágenes */}
            <section className="image-gallery">
                <h2>Galería de Imágenes</h2>
                <div className="image-container">
                    {/* Primera fila */}
                    <div className="image-box">
                        {/*<img src="src/assets/3.jpg" alt="Imagen 1" />*/}
                        <img src={img3} alt="Imagen 1" />
                    </div>
                    <div className="image-box">
                        <img src={img4} alt="Imagen 2" />
                    </div>
                    <div className="image-box">
                        <img src={img5} alt="Imagen 3" />
                    </div>
                    {/* Segunda fila */}
                    <div className="image-box">
                        <img src={img6} alt="Imagen 4" />
                    </div>
                    <div className="image-box">
                        <img src={img7} alt="Imagen 5" />
                    </div>
                    <div className="image-box">
                        <img src={img8} alt="Imagen 6" />
                    </div>
                    {/* 3era fila */}
                    <div className="image-box">
                        <img src={img9} alt="Imagen 7" />
                    </div>
                    <div className="image-box">
                        <img src={img5} alt="Imagen 8" />
                    </div>
                    <div className="image-box">
                        <img src={img10} alt="Imagen 9" />
                    </div>
                </div>
            </section>

            {/* Sección de Videos */}
            <section className="video-gallery">
                <h2>Galería de Videos</h2>
                <div className="video-container">
                    {/* Video 1 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SLTYVd7FJv4?si=IzRT9EMp0ocgb5T8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* Agregar más videos de YouTube según sea necesario */}
                </div>
                <br></br>
            </section>
            <Footer />
        </div>
    );
}

export default Gallery;
