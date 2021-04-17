import React from 'react';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
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
            <Faq/>
            <Footer/>
        </>
    );
};

export default Home;