import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WhyUs from '../components/WhyUs';
import Menu from '../components/Menu';
import Specials from '../components/Specials';
import Events from '../components/Events';
import BookTable from '../components/BookTable';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <>
        <Header />
        <Hero />
        <AboutUs />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <BookTable />
        <Testimonials />
        <Gallery />
        <ContactUs />
        <Footer />
        </>
    );
};

export default Homepage;