import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(() => {
        fetch('https://morning-caverns-70886.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <section id="services-area" className="container py-5">
            <div className="text-center pb-5">
                <p className="lead text-uppercase fw-normal text-muted text-center">How We Can Help</p>
                <h3 className="display-5"><span className="text-martinique fw-bold">Our</span> <span className="text-mountain fw-normal">Services</span></h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => <ServiceCard key={service._id} service={service}/>)}
            </div>
        </section>
    );
};

export default Services;