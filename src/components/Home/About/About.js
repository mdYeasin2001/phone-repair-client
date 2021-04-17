import React from 'react';
import about from '../../../images/about.jpg';

const About = () => {
    return (
        <section id="about" className="container py-5">
            <div className="row">
                <div className="col">
                    <div className="card border-0">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="card-body p-5">
                                    <h3 className="display-5"><span className="text-martinique fw-bold">Who We</span> <span className="text-mountain fw-normal">Are</span></h3>
                                    <p className="card-text text-muted">At PhoneRepair, you are assured of a high quality repair of your mobile devices
                                    (phones and tablets) at very a ordable prices. With over 12 years of technical
                                    experience in the industry, our knowledgeable technicians can quickly repair
                                    most damaged device. We thrive in delivering quality of service to all our
                                    customers.</p>
                                    
                                    <button className="btn-brand">View Services</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={about} className="img-fluid h-100" alt="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;