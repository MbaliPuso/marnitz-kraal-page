import React from "react";

const Gallery = () => {
    return (
        <>
        <section id="gallery" className="gallery">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Gallery</h2>
      <p>Some photos from Our Restaurant</p>
    </div>
  </div>
  <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
    <div className="row g-0">
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/Photos-02.jpg" alt='gallery 1' className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/Photos-03.jpg" alt='gallery 2' className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/Photos-05.jpg" alt='gallery 3' className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-4.jpg" alt='gallery 4' className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-5.jpg" alt='gallery 5' className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-6.jpg" alt='gallery 6' className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-7.jpg" alt='gallery 7' className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-8.jpg" alt='gallery 8' className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
};

export default Gallery;