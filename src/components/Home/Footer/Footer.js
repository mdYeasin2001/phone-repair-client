import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-light pt-5">
            <div className="container text-muted">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="text-dark pb-3">About</h4>
                        <p>Being the best in our eld means that we are committed to every project, we have ingenious ideas that become reality and we make every client happy.</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-dark pb-3">Explore</h5>

                        <a href="#header">About</a><br />
                        <a href="##">iPad Repair</a><br />
                        <a href="##">Smartphone Repair</a><br />
                        <a href="##">Tablet Repair</a><br />
                        <a href="##">Screen Replacement</a><br />
                        <a href="##">Water Damage Repair</a>

                    </div>
                    <div className="col-md-3">
                        <h5 className="text-dark pb-3">Services</h5>

                        <a href="##">iPhone Repair</a><br />
                        <a href="##">iPad Repair</a><br />
                        <a href="##">Smartphone Repair</a><br />
                        <a href="##">Tablet Repair</a><br />
                        <a href="##">Screen Replacement</a><br />
                        <a href="##">Water Damage Repair</a>

                    </div>
                    <div className="col-md-3">
                        <h5 className="text-dark pb-3">Contact</h5>
                        <p>Phone: +1 888 123 4567</p>
                        <p>Email: hello@tekhfixers.com</p>
                        <p>PhoneRepair, 513 Kings Rd, London,‌‌‌‌‌‌‌‌ SW10 0TX</p>
                    </div>
                </div>
                <div className="row pt-4">
                    <p className="text-center">© {new Date().getFullYear()} PhoneRepair. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;