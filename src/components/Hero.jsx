import React from "react";

const Hero = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="row">
            <div className="col-lg-8">
              <h1>
                Welcome to <span>Marnitz Kraal</span>
              </h1>
              <h2>Discover a sanctuary where nature meets comfort</h2>
              <div className="btns">
                <a href="#menu" className="btn-menu animated fadeInUp scrollto">
                  Our Menu
                </a>
                <a
                  href="#book-a-table"
                  className="btn-book animated fadeInUp scrollto"
                >
                  Book a Room
                </a>
              </div>
            </div>
            {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay={200}>
        <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn" />
      </div> */}
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
};

export default Hero;
