import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand fs-2" to="/"><span className="text-martinique fw-bold">Phone</span><span className="fw-normal">Repair</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link" to="/admin/orders">Order List</Link>
                        <Link className="nav-link" to="/admin/addServices">Add Services</Link>
                        <Link className="nav-link" to="/admin/makeAdmin">Make Admin</Link>
                        <Link className="nav-link" to="/admin/manage">Manage Services</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;