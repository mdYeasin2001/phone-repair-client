import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {


    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // sing in with google
                
                const { displayName, email, photoURL } = result.user;
                setLoggedInUser({ name: displayName, email, image: photoURL });
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorMessage, email);
            });
    }
    return (
        <div style={{ height: "80vh" }} className="d-flex flex-column justify-content-center align-items-center">
            <Link className="navbar-brand fs-2 d-block mb-3" to="/"><span className="text-martinique fw-bold">Phone</span><span className="fw-normal text-martinique">Repair</span></Link>
            <div className="text-center">
                
                <div className="p-5 border rounded">
                <h4 className="fw-bold pb-3">Login With</h4>
                <button onClick={handleGoogleSignIn} style={{ borderRadius: "2rem" }} className="btn btn-outline-light border-1 text-dark btn-lg"><FcGoogle className="fs-2 me-5" />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;