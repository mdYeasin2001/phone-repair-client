import React from 'react';
import repairman from '../../../images/repairman.jpg'; 

const Trusted = () => {
    return (
        <section id="about" className="container py-5">
            <div className="row">
                <div className="col">
                    <div className="card border-0">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={repairman} className="img-fluid" alt="service" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body p-5 pt-0 pe-0">
                                <p className="text-uppercase fw-normal text-muted lead">Professional Repair Technicians</p>
                                    <h3 className="display-5"><span className="text-martinique fw-bold">Your Device In</span> <span className="text-mountain fw-normal">Safe Hands</span></h3>
                                    <p className="card-text text-muted">Here at PhoneRepair we repair hundreds of devices a month, so rest assured you’re in safe hands sending your devices to us for repair.</p>
                                    <p className="card-text text-muted">PhoneRepair are capable of repairing any electronic device on the market now and those manufactured in the last 10 years. We have all the right tools for the job so we can open up your device, repair it and assemble it all back together without ever knowing it had been touched.</p>

                                    <button className="btn-brand">View Reviews</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trusted;