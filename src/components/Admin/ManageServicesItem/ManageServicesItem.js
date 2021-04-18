import React, { useState } from 'react';

const ManageServicesItem = ({service}) => {
    const {title, _id, serviceCharge, img} = service;
    const [deleted, setDeleted] = useState(false);

    const DeleteService = (id) => {
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setDeleted(data);
            data && alert("One service deleted permanently!");
        })
    } 
    return (
        <tr className={deleted ? "d-none": ""}>
            <td>
                <img style={{width: '70px'}} className="img-fluid" src={img} alt="service"/>
            </td>
            <td>{title}</td>
            <td className="text-center">{serviceCharge}</td>
            <td className="text-end">
                <button onClick={() => DeleteService(_id)} className="btn btn-danger me-3">Delete</button>
            </td>
        </tr>
    );
};

export default ManageServicesItem;