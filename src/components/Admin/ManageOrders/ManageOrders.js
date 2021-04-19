import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Order from '../Order/Order';

const ManageOrders = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [statusUpdated, setStatusUpdated] = useState(false);
    const [loading, setLoading] = useState(true);
    // console.log(statusUpdated);

    useEffect(() => {
        fetch('https://morning-caverns-70886.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            });
    }, [loggedInUser.email, statusUpdated])
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
                {orders.length > 0 &&
                    <thead>
                        <tr className="bg-light">
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                }
                <tbody>
                    {orders.map(order => <Order key={order._id} order={order} setStatusUpdated={setStatusUpdated} />)}
                </tbody>
            </table>

        </div>
    );
};

export default ManageOrders;