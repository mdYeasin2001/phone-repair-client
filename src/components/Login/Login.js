import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ height: "80vh" }} className="d-flex flex-column justify-content-center align-items-center">
            <Link className="navbar-brand fs-2 d-block mb-3" to="/"><span className="text-martinique fw-bold">Phone</span><span className="fw-normal text-martinique">Repair</span></Link>
            <div className="text-center">
                
                <div className="p-5 border rounded">
                <h4 className="fw-bold pb-3">Login With</h4>
                <button style={{ borderRadius: "2rem" }} className="btn btn-outline-light border-1 text-dark btn-lg"><FcGoogle className="fs-2 me-5" />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;