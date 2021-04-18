import React, { useEffect, useState } from 'react';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    return (
        <section id="testimonial-area" className="container py-5">
            <div className="text-center pb-5">
                <p className="lead text-uppercase fw-normal text-muted text-center">Testimonial</p>
                <h3 className="display-5"><span className="text-martinique fw-bold">What Clients</span> <span className="text-mountain fw-normal">Say?</span></h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {reviews.map(review => <ReviewsItem key={review._id} review={review}/>)}
            </div>
        </section>
    );
};

export default Testimonial;