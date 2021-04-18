import React from 'react';

const ReviewsItem = ({ review }) => {
    const { image, name, company, description, email } = review;
    return (
        <div className="col">
            <div className="card h-100 bg-light border-0 shadow">
                <div className="card-body">
                    <div className="d-flex">
                        <div>
                            <img src={image} style={{ borderRadius: "50%", width: "100px" }} className="card-img-top d-block img-fluid" alt="service" />
                        </div>
                        <div className="ms-5">
                            <h5 className="card-title">{name}</h5>
                            <h5 className="card-title">{company}</h5>
                        </div>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsItem;