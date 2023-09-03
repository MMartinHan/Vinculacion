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
                        <img src="src/assets/reparacion.jpg" alt="Imagen 1" />
                        <h3>Subtítulo 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui accusantium magnam, adipisci tenetur, similique vel veniam soluta porro harum vero id. Odit, eius. Similique ab deleniti architecto eaque. Dolores.</p>
                    </div>
                    <div className="image-box">
                        <img src="src/assets/repotenciacion.jpg" alt="Imagen 2" />
                        <h3>Subtítulo 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatibus debitis. Asperiores sunt voluptatibus, at ducimus aut commodi necessitatibus velit tempore nobis impedit explicabo dolore incidunt assumenda beatae ad quasi!</p>
                    </div>
                    <div className="image-box">
                        <img src="src/assets/repotenciacion2.jpg" alt="Imagen 3" />
                        <h3>Subtítulo 3</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatum omnis. Dolorum ipsam libero, voluptatibus velit assumenda repellendus odio iste dicta accusamus fugiat optio, vero quasi delectus, in officia minima.</p>
                    </div>
                    {/* Segunda fila */}
                    <div className="image-box">
                        <img src="src/assets/tapa.jpg" alt="Imagen 4" />
                        <h3>Subtítulo 4</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae non necessitatibus dicta ex, mollitia incidunt cumque dolores aspernatur. Ad unde odit quis est nihil earum fugit modi, quaerat inventore! Amet.</p>
                    </div>
                    <div className="image-box">
                        <img src="src/assets/ventilador.jpeg" alt="Imagen 5" />
                        <h3>Subtítulo 5</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi facilis laboriosam earum. Dignissimos, sed quos nulla blanditiis, similique, neque eum optio dicta cumque provident vero quod veniam facilis maxime.</p>
                    </div>
                    <div className="image-box">
                        <img src="src/assets/donacion.jpg" alt="Imagen 6" />
                        <h3>Subtítulo 6</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum neque officiis animi labore tenetur assumenda aperiam quos tempore deleniti molestiae iure asperiores voluptatibus similique enim, numquam commodi et facilis qui!</p>
                    </div>
                    {/* 3era fila */}
                    <div className="image-box">
                        <img src="src/assets/tapa.jpg" alt="Imagen 7" />
                        <h3>Subtítulo 7</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius eveniet ad dolore commodi quam molestiae illum. In, fugiat quae aliquid alias est, recusandae distinctio eveniet inventore suscipit velit officiis!</p>
                    </div>
                    <div className="image-box">
                        <img src="src/assets/ventilador.jpeg" alt="Imagen 8" />
                        <h3>Subtítulo 8</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, velit similique molestiae asperiores qui ducimus adipisci architecto, accusamus placeat quisquam sint? Impedit aut eos ex perspiciatis repellat, adipisci totam fugit!</p>
                    </div>
                    <div className="image-box">
                        <img src="src/assets/donacion.jpg" alt="Imagen 9" />
                        <h3>Subtítulo 9</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quo accusamus enim quod sapiente accusantium a ratione impedit nihil pariatur eos corrupti nesciunt voluptatibus velit totam quia, ducimus quos aut?</p>
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
                    <div className="video-box">

                    </div>
                    {/* Video 2 */}
                    <div className="video-box">
                        <iframe
                            title="Video 2"
                            src="https://www.youtube.com/embed/video_id_2"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Video 3 */}
                    <div className="video-box">
                        <iframe
                            title="Video 3"
                            src="https://www.youtube.com/embed/video_id_3"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Agregar más videos de YouTube según sea necesario */}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Gallery;
