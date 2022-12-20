import './contact.css';
import React from 'react';
import { BsEnvelope, BsTelephone } from 'react-icons/bs';
import { SlLocationPin } from "react-icons/sl";
import Fade from 'react-reveal/Fade';



function Contact() {

    return (
        <>
            <section id="contact-section">
                    <Fade left>
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
                                <p>7561 Melrose Ave. West Hollywood, CA 90046</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div id="cp-google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.437250098534!2d-118.35691804914127!3d34.083937480502065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bed3abba7fdb%3A0x3b9fba3f4044dc43!2s7561%20Melrose%20Ave%2C%20Los%20Angeles%2C%20CA%2090046!5e0!3m2!1sen!2sus!4v1666299489629!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Fade>
            </section>
        </>
    )
};

export default Contact;