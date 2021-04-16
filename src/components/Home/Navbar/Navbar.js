import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand fs-2" to="/"><span className="text-martinique fw-bold">Phone</span><span className="fw-normal">Repair</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link" href="#">Contact</a>
                        <Link className="nav-link" to="/admin/orders">Admin</Link>
                    </div>
                    <Link to="/login"><button className="btn-brand">Login</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;