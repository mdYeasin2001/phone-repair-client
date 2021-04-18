import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { HiUserCircle } from 'react-icons/hi';

const DashboardNavbar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/userRole', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [loggedInUser.email])
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand fs-2" to="/"><span className="text-martinique fw-bold">Phone</span><span className="fw-normal">Repair</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold">
                        {admin &&
                            <>
                                <Link className="nav-link mx-3" to="/admin/orders">Manage Orders</Link>
                                <Link className="nav-link mx-3" to="/admin/addServices">Add Services</Link>
                                <Link className="nav-link mx-3" to="/admin/makeAdmin">Make Admin</Link>
                                <Link className="nav-link mx-3" to="/admin/manage">Manage Services</Link>
                            </>
                        }
                        {admin &&
                            <>
                                <Link className="nav-link mx-3" to="/book">Book</Link>
                                <Link className="nav-link mx-3" to="/bookList">Book List</Link>
                                <Link className="nav-link mx-3" to="/review">Review</Link>
                            </>
                        }
                        <a className="fw-bold nav-link" href="#"><HiUserCircle className="fs-3 me-2"/>{loggedInUser.name}</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;