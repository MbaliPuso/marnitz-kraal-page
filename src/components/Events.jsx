import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Events = () => {
    return (
      <>
        <section id="events" className="events">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Events</h2>
              <p>Organize Your Events in our Restaurant</p>
            </div>
            {/* carousel begins */}
            <Swiper
              className="events-slider swiper-container"
              // data-aos="fade-up"
              // data-aos-delay={100}
              slidesPerView={1} 
              spaceBetween={30}
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img
                        src="assets/img/event-birthday.jpg"
                        className="img-fluid"
                        alt='birthday event at Marnitz Kraal'
                      />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Birthday Parties</h3>
                      <div className="price">
                        <p>
                          <span>$189</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-circled" /> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                          <i className="bi bi-check-circled" /> Duis aute irure
                          dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                          <i className="bi bi-check-circled" /> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End testimonial item */}
                <SwiperSlide className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img
                        src="assets/img/event-private.jpg"
                        className="img-fluid"
                        alt='private event at Marnitz Kraal'
                      />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Private Parties</h3>
                      <div className="price">
                        <p>
                          <span>$290</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-circled" /> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                          <i className="bi bi-check-circled" /> Duis aute irure
                          dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                          <i className="bi bi-check-circled" /> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End testimonial item */}
                <SwiperSlide className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img
                        src="assets/img/event-custom.jpg"
                        className="img-fluid"
                        alt='custom events at Marnitz Kraal'
                      />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Custom Parties</h3>
                      <div className="price">
                        <p>
                          <span>$99</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-circled" /> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                          <i className="bi bi-check-circled" /> Duis aute irure
                          dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                          <i className="bi bi-check-circled" /> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
        </section>
      </>
    );
};

export default Events;