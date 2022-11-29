import './contact.css';
import { useState, useRef } from 'react';
// import mailOutline from "../../assets/icons/mail-outline.svg";
// import locationPin from "../../assets/icons/location-outline.svg";
// import phoneIcon from "../../assets/icons/call-outline.svg";
// import { BsEnvelope, BsTelephone } from 'react-icons/bs';
// import { SlLocationPin } from "react-icons/sl";
import Fade from 'react-reveal/Fade';


function Contact() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <>
            <section id="contact-section">
                <div id="contact-container">
                    <Fade left>
                        <form id="cp-contact-form">
                            <h2>Reach Out</h2>
                            <div id="form-slot-1">
                                <label htmlFor="name">Name</label>
                                <input type="text" defaultValue={name} name="name" />
                            </div>
                            <div id="form-slot-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" defaultValue={email} name="email" />
                            </div>
                            <div id="form-slot-3">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" defaultValue={message} rows="10" cols="45" />
                            </div>
                            <button type="submit" className="contact-submit-btn">Submit</button>
                        </form>
                    </Fade>
                    <Fade right>
                        <div id="info-and-map">
                            <div id="contact-info">
                                {/* <div className="contact-info-line">
                                    <BsEnvelope />
                                    <p>info@hiddendoorstudios.com</p>
                                </div>
                                <div className="contact-info-line">
                                    <BsTelephone />
                                    <p>(310) 888-8888</p>
                                </div>
                                <div className="contact-info-line">
                                    <SlLocationPin />
                                    <p>7561 Melrose Ave. West Hollywood, CA 90046</p>
                                </div> */}
                            </div>
                            <div id="cp-google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.437250098534!2d-118.35691804914127!3d34.083937480502065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bed3abba7fdb%3A0x3b9fba3f4044dc43!2s7561%20Melrose%20Ave%2C%20Los%20Angeles%2C%20CA%2090046!5e0!3m2!1sen!2sus!4v1666299489629!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
};

export default Contact;