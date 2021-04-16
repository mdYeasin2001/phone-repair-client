import React from 'react';
import repairman from '../../../images/repairman.jpg';
import FaqItem from '../FaqItem/FaqItem';


const Faq = () => {

    const faqList = [
        {
            title: "My Device Doesn’t Switch On",
            description: "An electronic device not switching on can be the result of many things. Most commonly there is a fault with the mainboard or the battery. We can diagnose a range of issues and replace only what's needed to be."
        },
        {
            title: "What Happens if You Can’t Fix My Device?",
            description: "If we can't fix your device we will get in touch with you to discuss your options. We can either offer you a replacement device for a cost, or we can return the device to you and refund your service charge."
        },
        {
            title: "My Touchscreen Doesn’t Work",
            description: "Many touchscreens won't work if the device has been a victim to a heavy fall or if the device has previously been 'repaired' and a genuine screen wasn't used in the replacement. All our replacement parts come with a 6 month warranty."
        },
        {
            title: "Is The Postage Insured When You Send Back My Device?",
            description: "Every device that leaves our store comes with a €1,000 minimum insurance cover, so rest assured you won't be out of pocket if the worst happens. We also recommend insuring the mail to the value of your phone when you send it in for repairs."
        },
        {
            title: "Flushed My Phone Down the Toilet",
            description: "That was a bit silly, wasn't it? Some believe putting the device in a bag of rice will solve all your problems. But this isn't true and sometimes the damage has already been done."
        },
        {
            title: "Can I Deliver My Device in Person?",
            description: "Unfortunately, due to health and safety laws we cannot allow members of the public on our premises so we can only accept mail deliveries of your devices."
        }
    ]

    return (

        <section className="container py-5">
            <div className="text-center pb-5">
                <p className="lead text-uppercase fw-normal text-muted">Don’t be afraid to ask!</p>
                <h3 className="display-5"><span className="text-martinique fw-bold">Frequently Asked</span> <span className="text-mountain fw-normal">Questions</span></h3>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {faqList.map((faq, i) => <FaqItem key={i} faq={faq} />)}
            </div>
            <div className="text-center">
                <button className="btn-brand mx-1">All FAQ</button>
                <button className="btn-brand mx-1">Fix My Device</button>
            </div>
        </section>
    );
};

export default Faq;