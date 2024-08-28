import React from "react";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="about-img">
                <img
                  src="assets/img/about.jpg"
                  alt="restuarantly about us pictures"
                />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Experience Comfort and Adventure at Marnitz Kraal Lodge.</h3>
              <p>
                Nestled between Tom Burke and Lephalale, Marnitz Kraal Lodge
                offers a unique retreat for travelers seeking the perfect blend
                of comfort and adventure. Conveniently located near the Botswana
                border, our lodge serves as an ideal stopover for those
                journeying to and from Botswana or simply exploring the scenic
                landscapes of the Limpopo Province.
              </p>
              {/* <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              {/* <ul>
                <li>
                  <i className="bi bi-check-circle" /> Conveniently situated
                  near the Botswana border, offering easy access to a variety of
                  attractions.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Comfortable cabins for a relaxing stay.
                  Camping facilities available for those seeking a closer connection to nature..
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Enjoy a refreshing drink after a day of exploring at the bar. Take a dip and cool off in the lodge's pool. Dine at the on-site restaurant offering delicious meals. Access essentials at the convenience store within the lodge.
                </li>
              </ul> */}
              <p>
                Surrounded by the serene bushveld and conveniently located near
                major routes, Marnitz Kraal Lodge is the perfect escape for
                travelers seeking a tranquil retreat with the comforts of home.
                Whether you're passing through or planning a longer stay, we
                invite you to relax, recharge, and explore the beautiful
                surroundings of our lodge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
