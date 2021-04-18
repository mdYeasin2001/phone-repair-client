import React from 'react';

const Banner = () => {
    return (
        <section className="container">
            <div className="row mt-5 pt-5">
                <div className="col-md-8 offset-md-2 text-center">
                    <h1 className="text-martinique">Bring your gadget back to life</h1>
                    <p className="lead fw-normal text-martinique">We repair mobile phones. Repairs from cracked screen problems, speakers and lots more. We offer all kinds of iPad & Tablets repair services, including software update services, button and battery replacement, and screen repairs</p>
                    <a className="btn-brand mx-1" href="#about-area">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;