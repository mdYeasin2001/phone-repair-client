import React from 'react';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Trusted from '../Trusted/Trusted';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Header/>
            <WhyChooseUs/>
            <About/>
            <Services/>
            <Trusted/>
            <Testimonial/>
            <Faq/>
            <Footer/>
        </>
    );
};

export default Home;