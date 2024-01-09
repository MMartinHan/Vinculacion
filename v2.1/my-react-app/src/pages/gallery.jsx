import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './gallery.css';

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
                        <img src="src/assets/3.jpg" alt="Imagen 1" />
                    </div>
                    <div className="image-box">
                        <img src="src/assets/2.jpg" alt="Imagen 2" />
                    </div>
                    <div className="image-box">
                        <img src="src/assets/1.jpg" alt="Imagen 3" />
                    </div>
                    {/* Segunda fila */}
                    <div className="image-box">
                        <img src="src/assets/4.jpg" alt="Imagen 4" />
                    </div>
                    <div className="image-box">
                        <img src="src/assets/5.jpg" alt="Imagen 5" />
                    </div>
                    <div className="image-box">
                        <img src="src/assets/g1.png" alt="Imagen 6" />
                    </div>
                    {/* 3era fila */}
                    <div className="image-box">
                        <img src="src/assets/alumnos.jpg" alt="Imagen 7" />
                    </div>
                    <div className="image-box">
                        <img src="src/assets/1.jpg" alt="Imagen 8" />
                    </div>
                    <div className="image-box">
                        <img src="src/assets/donacion.jpg" alt="Imagen 9" />
                    </div>
                </div>
            </section>

            {/* Sección de Videos */}
            <section className="video-gallery">
                <h2>Galería de Videos</h2>
                <div className="video-container">
                    {/* Video 1 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cO98d94GblY?si=9Lry-zZ3_wz7kC_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/D8Hsd06QLxQ?si=IWbBbX6G2tp3FFOz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NQSnHWc2_VU?si=KYCbunx9ObQcDMu_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3N-5qEJkKDg?si=MmhNtrROUK6TGlNX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* Agregar más videos de YouTube según sea necesario */}
                </div>
                <br></br>
            </section>
            <Footer />
        </div>
    );
}

export default Gallery;
