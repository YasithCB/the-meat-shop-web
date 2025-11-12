import {ADDRESS, CONTACT1, EMAIL} from "../../data/Constants.js";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact3 = () => {
    return (
        <div>
<div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style1">
            <div className="container">

                <div className="row gx-4 gy-4 d-flex align-items-stretch">

                    {/* Email */}
                    <div className="col-12 col-md">
                        <div className="card h-100 text-center border-0 shadow-sm rounded-4 p-4 contact-card">
                            <div className="mb-3 d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle mx-auto" style={{width: '56px', height: '56px'}}>
                                <Mail className="text-danger" size={28} />
                            </div>
                            <h5 className="fw-semibold mb-2">Email</h5>
                            <p className="text-muted mb-1">{EMAIL.INFO}</p>
                            <p className="text-muted small mb-0">Email us anytime for inquiries.</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="col-12 col-md">
                        <div className="card h-100 text-center border-0 shadow-sm rounded-4 p-4 contact-card">
                            <div className="mb-3 d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle mx-auto" style={{width: '56px', height: '56px'}}>
                                <Phone className="text-danger" size={28} />
                            </div>
                            <h5 className="fw-semibold mb-2">Hotline</h5>
                            <p className="text-muted mb-1">{CONTACT1}</p>
                            <p className="text-muted small mb-0">24/7 live chat & phone support</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="col-12 col-md">
                        <div className="card h-100 text-center border-0 shadow-sm rounded-4 p-4 contact-card">
                            <div className="mb-3 d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle mx-auto" style={{width: '56px', height: '56px'}}>
                                <Clock className="text-danger" size={28} />
                            </div>
                            <h5 className="fw-semibold mb-2">Opening Hours</h5>
                            <p className="text-muted mb-0">Mon–Fri: 9 AM – 6 PM</p>
                            <p className="text-muted mb-0">Sat: 9 AM – 1 PM</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <div className="contact-form-section section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
            <div className="container">
                <div className="row gx-60 gy-5">
                    <div className="col-xl-6">
                        <div className="contact-form-thumb">
                            <img src="/assets/img/contact/contactThumb2_1.png" alt="thumb" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-form style2">
                            <h2>Get in Touch</h2>
                            <form className="row" action="#">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-md-6">
                                    <input type="number" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-6">
                                    <select name="orderby" className="single-select" aria-label="Shop order">
                                        <option value="subject">Subject</option>
                                        <option value="complain">Complain</option>
                                        <option value="greetings">Greetings</option>
                                        <option value="date">Expire Date</option>
                                        <option value="price">About Price</option>
                                        <option value="order">About order</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea id="message" className="form-control" placeholder="Write your message here..."
                                        rows="5"></textarea>
                                </div>
                                <div className="col-12 form-group">
                                    <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                    <label htmlFor="reviewcheck">Collaboratively formulate principle capital. Progressively
                                        evolve user<span className="checkmark"></span></label>
                                </div>
                                <div className="col-12 form-group mb-0">
                                    <button className="theme-btn w-100">SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
};

export default Contact3;