import React, { useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  useEffect(() => {
    // JavaScript logic to handle the toggle
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navbar = document.querySelector("#navbar");

    const handleToggle = () => {
      navbar.classList.toggle("navbar-mobile");
      mobileNavToggle.classList.toggle("bi-x");
    };

    // Add event listener
    mobileNavToggle.addEventListener("click", handleToggle);

    // Clean up the event listener when the component unmounts
    return () => {
      mobileNavToggle.removeEventListener("click", handleToggle);
    };
  }, []); // Empty dependency array to run only once after mount
  
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          {/* <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1> */}
          <img src={logo} alt="Marnitz Kraal logo" height={80} width={80} />
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#menu">
                  Menu
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#specials">
                  Specials
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#events">
                  Events
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="dropdown">
                <a href="/">
                  <span>Rooms</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="/">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="/">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="/">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
          <a
            href="#book-a-table"
            className="book-a-table-btn scrollto d-none d-lg-flex"
          >
            Book a room
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
