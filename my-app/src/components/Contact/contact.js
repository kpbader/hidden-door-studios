import './contact.css';
import jT from '../../assets/images/joshua-tree-1.jpg';
import { useState, useRef } from 'react';
// import mailOutline from "../../assets/icons/mail-outline.svg";
// import locationPin from "../../assets/icons/location-outline.svg";
// import phoneIcon from "../../assets/icons/call-outline.svg";
import { BsEnvelope, BsTelephone } from 'react-icons/bs';
import { SlLocationPin } from "react-icons/sl";

function Contact() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <>
            <section id="contact-section">
                <div id="contact-splash">
                    <div className="splash-text">Contact</div>
                    <img src={jT} alt="joshua tree" id="sliderIMG" />
                </div>
                <div id="contact-container">
                    <form id="contact-form">
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
                            <textarea name="message" defaultValue={message} rows="10" cols="45"/>
                        </div>
                        <button type="submit" className="contact-submit-btn">Submit</button>
                    </form>
                    <div id="info-and-map">
                        <div id="contact-info">
                            <div className="contact-info-line">
                                <BsEnvelope />
                                <p>info@hiddendoorstudios.com</p>
                            </div>
                            <div className="contact-info-line">
                                <BsTelephone />
                                <p>(310) 888-8888</p>
                            </div>
                            <div className="contact-info-line">
                                <SlLocationPin />
                                <p>1234 Melrose Ave. West Hollywood, CA 90046</p>
                            </div>
                        </div>
                        <div id="google-map">
                            <iframe title="map" width="500" height="400" src="https://maps.google.com/maps?q=1800%20Vine%20Street%20Los%20Angle&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;