import React from 'react';
import money from '../../../images/money.png';
import construction from '../../../images/construction.png';
import schedule from '../../../images/schedule.png';
import WhyChooseCard from '../WhyChooseUsCard/WhyChooseCard';

const WhyChooseUs = () => {
    const cardData = [
        {   
            icon: money,
            title: 'No Fix No Fee',
            description: 'We are so con dent with our service that if we can’t x the problem, you don’t pay. All repairs come with a 30 day guarantee.'
        },
        {   
            icon: construction,
            title: 'Quick Repair Process',
            description: 'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.'
        },
        {   
            icon: schedule,
            title: '30 Days Warranty',
            description: 'This means if you have a recurring problem, just pick up and repair it free of charge*!'
        }
    ]
    return (
        <section className="container py-5">
            <div className="text-center pb-5">
                <p className="lead text-uppercase fw-normal text-muted">fastest repair service</p>
                <h3 className="display-5"><span className="text-martinique fw-bold">Why Choose</span> <span className="text-mountain fw-normal">Us</span></h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cardData.map((data, i) => <WhyChooseCard key={i} data={data}/>)}
            </div>
        </section>
    );
};

export default WhyChooseUs;