import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <Banner />
        </header>
    );
};

export default Header;