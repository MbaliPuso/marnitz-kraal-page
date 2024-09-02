import React from "react";

const WhyUs = () => {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Why Us</h2>
            <p>Why Choose Our Lodge</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                <span>01</span>
                <h4>Location</h4>
                <p>
                  Conveniently situated along Tom Burke and Lephalale, near the
                  Botswana border, offering easy access to a variety of
                  attractions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                <span>02</span>
                <h4>Accommodation Options</h4>
                <p>
                  We have comfortable cabins for a relaxing stay and camping
                  facilities available for those seeking a closer connection to
                  nature.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                <span>03</span>
                <h4>Amenities</h4>
                <p>
                  Enjoy a refreshing drink after a day of exploring at the bar. Dine at the
                  on-site restaurant offering delicious meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
