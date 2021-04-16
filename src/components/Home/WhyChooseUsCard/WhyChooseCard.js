import React from 'react';

const WhyChooseCard = ({ data }) => {
    const { icon, title, description } = data;
    return (
        <div className="col">
            <div className="card h-100 bg-light border-0 shadow">
                <div className="card-body text-center">
                    <img src={icon} className="img-fluid w-25" alt="icon" />
                    <h5 className="card-title pb-2 pt-4">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseCard;