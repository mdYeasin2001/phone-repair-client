import React, { useEffect, useState } from 'react';

const Order = ({ order, setStatusUpdated }) => {
    const { name, email, status, _id } = order;
    const [updateBooking, setUpdateBooking] = useState({});
    // console.log(updateBooking);
    useEffect(() => {
        fetch('https://morning-caverns-70886.herokuapp.com/updateBooking', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateBooking)
        })
        .then(res => res.json())
        .then(data => {
            setStatusUpdated(data)
            data && alert("Status updated successfully")
        });
    }, [updateBooking, setStatusUpdated])

    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{email}</td>
            <td>{order?.service[0].title}</td>
            <td>{order?.payment.card.brand}</td>
            <td>
                <div className="dropdown">
                    <button className={`btn ${status === "Pending" ? "text-danger" : ""} ${status === "On going" ? "text-warning" : ""} ${status === "Done" ? "text-success" : ""} dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {status}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button onClick={() => setUpdateBooking({ status: "Pending", id: _id })} className="dropdown-item text-danger">Pending</button></li>
                        <li><button onClick={() => setUpdateBooking({ status: "On going", id: _id })} className="dropdown-item text-warning">On going</button></li>
                        <li><button onClick={() => setUpdateBooking({ status: "Done", id: _id })} className="dropdown-item text-success">Done</button></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default Order;