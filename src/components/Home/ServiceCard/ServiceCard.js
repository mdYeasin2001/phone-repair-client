import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { title, description, img, _id, serviceCharge } = service;
    const history = useHistory();
    
    return (
        <div className="col service-card">
            <div onClick={() => history.push(`/book/${_id}`)} className="card h-100 bg-light border-0 shadow">
                <img src={img} className="card-img-top img-fluid" alt="service" />
                <div className="card-body">
                    <h5 className="card-title pb-2 pt-4">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer border-0 bg-light">
                    <h3 className="text-martinique">${serviceCharge}</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;