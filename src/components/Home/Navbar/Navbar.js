import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { HiUserCircle } from 'react-icons/hi';
import firebase from "firebase/app";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    const history = useHistory();
    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedInUser({});
            history.push('/');
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }
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
                        <Link className="nav-link active mx-3" aria-current="page" to="/">Home</Link>
                        <a className="nav-link mx-3" href="#about-area">About Us</a>
                        <a className="nav-link mx-3" href="#services-area">Services</a>
                        <a className="nav-link mx-3" href="#">Contact</a>
                        {admin ? 
                            <Link className="nav-link mx-3" to="/admin/orders">Admin</Link>
                            :
                            <Link className="nav-link mx-3" to="/bookList">Dashboard</Link>

                        }
                    </div>
                    {loggedInUser.email ?
                        <>
                            <a className="fw-bold nav-link text-dark" href="#"><HiUserCircle className="fs-3 me-2"/>{loggedInUser.name}</a>
                            <button onClick={handleLogout} className="btn-brand d-block">Log out</button>
                        </>
                        :
                        <Link to="/login"><button className="btn-brand d-block">Login</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;