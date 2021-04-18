import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageServicesItem from '../ManageServicesItem/ManageServicesItem';

const ManageServices = () => {
    const [loggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/manageServices', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            });
    }, [loggedInUser.email])
    return (
        <div className="container py-5">
            {loading &&
                <div className="d-flex justify-content-center pt-5">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <table className="table">
                {services.length > 0 &&
                    <thead>
                        <tr className="bg-light">
                            <th scope="col">image</th>
                            <th scope="col">Service</th>
                            <th className="text-center" scope="col">Service Charge</th>
                            <th className="text-end" scope="col">Delete Service</th>
                        </tr>
                    </thead>
                }
                <tbody>
                    {services.map(service => <ManageServicesItem key={service._id} service={service} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;